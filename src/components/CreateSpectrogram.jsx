import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {
	computeSpectrogram,
	filterSpectrogram,
	viridis,
	FREQ_MIN,
	FREQ_MAX,
	MIN_THRESHOLD_DB,
} from "../utils/spectrogramUtils";
import "../Styles/CreateSpectrogram.css";

const CreateSpectrogram = ({ record, variant = "dark", size, buttonLabel = "Create Spectrogram", iconOnly = false }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [spectrogramData, setSpectrogramData] = useState(null);
	const canvasRef = useRef(null);

	const handleCreate = async () => {
		if (!record?.audioFilePath) {
			setError("No audio file available");
			return;
		}
		setLoading(true);
		setError(null);
		setSpectrogramData(null);
		setShowModal(true);

		try {
			const audioUrl = record.audioFilePath;
			// Use proxy in dev (Vite) and production (Netlify redirect) to avoid CORS with S3
			const proxyUrl =
				audioUrl?.includes("soundingicetestbucket.s3.eu-west-2.amazonaws.com")
					? audioUrl.replace(
							"https://soundingicetestbucket.s3.eu-west-2.amazonaws.com",
							"/s3-audio"
						)
					: audioUrl;

			const response = await fetch(proxyUrl);
			if (!response.ok) throw new Error("Failed to fetch audio");
			const arrayBuffer = await response.arrayBuffer();

			const audioContext = new (window.AudioContext || window.webkitAudioContext)();
			const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

			let samples = audioBuffer.getChannelData(0);
			if (audioBuffer.numberOfChannels > 1) {
				const right = audioBuffer.getChannelData(1);
				samples = new Float32Array(samples.length);
				for (let i = 0; i < samples.length; i++) {
					samples[i] = (audioBuffer.getChannelData(0)[i] + right[i]) / 2;
				}
			}

			const sampleRate = audioBuffer.sampleRate;
			const lenSec = samples.length / sampleRate;

			const maxSamples = Math.min(samples.length, 120 * sampleRate);
			const samplesToUse = samples.slice(0, maxSamples);

			const specResult = computeSpectrogram(samplesToUse, sampleRate);
			const filtered = filterSpectrogram(specResult);

			// PSD = promedio temporal del espectrograma (misma escala que el spectrogram)
			const { fFiltered, SxxFiltered, nFiltered, nWindows } = filtered;
			const psdDb = new Float32Array(nFiltered);
			for (let k = 0; k < nFiltered; k++) {
				let sum = 0;
				for (let t = 0; t < nWindows; t++) {
					sum += Math.pow(10, SxxFiltered[k * nWindows + t] / 10);
				}
				let db = 10 * Math.log10(sum / nWindows + 1e-10);
				db = Math.max(db, MIN_THRESHOLD_DB);
				psdDb[k] = db;
			}
			const psdResult = { f: fFiltered, psd_db: psdDb };

			const tStart = -lenSec;
			const tEnd = 0;

			setSpectrogramData({
				...filtered,
				psd: psdResult,
				waveform: samplesToUse,
				sampleRate,
				tStart,
				tEnd,
				lenSec: maxSamples / sampleRate,
				audioUrl: proxyUrl,
			});
		} catch (err) {
			setError(err.message || "Could not create spectrogram");
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		setShowModal(false);
		setSpectrogramData(null);
		setError(null);
	};

	return (
		<>
			<Button
				variant={variant}
				size={size}
				onClick={handleCreate}
				disabled={loading || !record?.audioFilePath}
				title={iconOnly ? "Create Spectrogram" : undefined}
			>
				{loading ? (
					<>
						<Spinner animation="border" size="sm" className="me-2" />
						Creating...
					</>
				) : iconOnly ? (
					<span className='material-symbols-outlined' style={{ fontSize: "1.1rem" }}>
						graphic_eq
					</span>
				) : (
					buttonLabel
				)}
			</Button>

			<Modal show={showModal} onHide={handleClose} size="xl" centered>
				<Modal.Header closeButton>
					<Modal.Title>
						Spectrogram — {record?.id || "Recording"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{loading && (
						<div className="create-spectrogram-loading">
							<Spinner animation="border" />
							<p>Generating spectrogram... This may take a moment.</p>
						</div>
					)}
					{error && (
						<div className="create-spectrogram-error">
							<p>{error}</p>
						</div>
					)}
					{spectrogramData && !loading && (
						<SpectrogramCanvas data={spectrogramData} />
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};

// Layout constants - with padding to prevent overflow
const PADDING = 8;
const LAYOUT = {
	width: 920,
	height: 520,
	leftColW: 90,
	rightColW: 810,
	topRowH: 380,
	bottomRowH: 120,
};

function SpectrogramCanvas({ data }) {
	const canvasRef = useRef(null);
	const audioRef = useRef(null);
	const [playbackProgress, setPlaybackProgress] = useState(0);
	const { fFiltered, SxxFiltered, nFiltered, nWindows, psd, waveform, sampleRate, tStart, tEnd, audioUrl } = data;

	// Redraw canvas when data or playback changes
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || !SxxFiltered || nFiltered === 0 || nWindows === 0) return;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const { width, height, leftColW, rightColW, topRowH, bottomRowH } = LAYOUT;

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		const ctx = canvas.getContext("2d");
		ctx.save();
		ctx.scale(dpr, dpr);
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, width, height);

		const psdLeft = PADDING;
		const psdWidth = leftColW - PADDING * 2;
		const specLeft = leftColW + PADDING;
		const specWidth = rightColW - PADDING * 2;
		const specTop = PADDING;
		const specHeight = topRowH - PADDING * 2;
		const waveTop = topRowH + PADDING;
		const waveHeight = bottomRowH - PADDING * 2;
		const waveWidth = specWidth;

		// PSD (Power Spectral Density) - left panel (fill_betweenx: curve to right edge)
		const psdFreq = [];
		const psdDb = [];
		for (let i = 0; i < psd.f.length; i++) {
			if (psd.f[i] >= FREQ_MIN && psd.f[i] <= FREQ_MAX) {
				psdFreq.push(psd.f[i]);
				psdDb.push(psd.psd_db[i]);
			}
		}

		ctx.fillStyle = "#000";
		ctx.fillRect(psdLeft, specTop, psdWidth, specHeight);

		if (psdFreq.length > 1) {
			const logMin = Math.log10(FREQ_MIN);
			const logMax = Math.log10(FREQ_MAX);
			const dbMin = MIN_THRESHOLD_DB;
			const dbMax = 0;

			// X-axis: dB de -80 (derecha) a 0 (izquierda), como en Python
			const dbToX = (db) => {
				const t = (db - dbMin) / (dbMax - dbMin);
				return psdLeft + psdWidth * (1 - Math.max(0, Math.min(1, t)));
			};

			// Draw fill: horizontal bars from curve to right edge
			ctx.fillStyle = "rgba(255,255,255,0.7)";
			for (let i = 0; i < psdFreq.length - 1; i++) {
				const logF = Math.log10(psdFreq[i]);
				const logFNext = Math.log10(psdFreq[i + 1]);
				const xCurve = dbToX(psdDb[i]);
				const yTop = specTop + specHeight - ((logF - logMin) / (logMax - logMin)) * specHeight;
				const yBottom = specTop + specHeight - ((logFNext - logMin) / (logMax - logMin)) * specHeight;
				const barH = Math.max(1, yBottom - yTop);
				ctx.fillRect(xCurve, yTop, psdLeft + psdWidth - xCurve, barH);
			}

			// Draw PSD curve outline
			ctx.strokeStyle = "#fff";
			ctx.lineWidth = 1;
			ctx.beginPath();
			for (let i = 0; i < psdFreq.length; i++) {
				const logF = Math.log10(psdFreq[i]);
				const x = dbToX(psdDb[i]);
				const y = specTop + specHeight - ((logF - logMin) / (logMax - logMin)) * specHeight;
				if (i === 0) ctx.moveTo(x, y);
				else ctx.lineTo(x, y);
			}
			ctx.stroke();

			ctx.fillStyle = "#fff";
			ctx.font = "9px sans-serif";
			ctx.fillText("PSD", psdLeft + 2, specTop + 12);
		}

		// Spectrogram - center (use offscreen canvas so drawImage respects transform)
		const specW = Math.floor(specWidth);
		const specH = Math.floor(specHeight);
		const offscreen = document.createElement("canvas");
		offscreen.width = specW;
		offscreen.height = specH;
		const offCtx = offscreen.getContext("2d");
		const specImageData = offCtx.createImageData(specW, specH);
		for (let py = 0; py < specH; py++) {
			const freqIdx = Math.min(Math.floor((1 - py / specH) * nFiltered), nFiltered - 1);
			for (let px = 0; px < specW; px++) {
				const timeIdx = Math.min(Math.floor((px / specW) * nWindows), nWindows - 1);
				const db = SxxFiltered[freqIdx * nWindows + timeIdx];
				const t = (db - MIN_THRESHOLD_DB) / (0 - MIN_THRESHOLD_DB);
				const [r, g, b] = viridis(Math.max(0, Math.min(1, t)));
				const i = (py * specW + px) * 4;
				specImageData.data[i] = Math.round(r * 255);
				specImageData.data[i + 1] = Math.round(g * 255);
				specImageData.data[i + 2] = Math.round(b * 255);
				specImageData.data[i + 3] = 255;
			}
		}
		offCtx.putImageData(specImageData, 0, 0);
		ctx.drawImage(offscreen, specLeft, specTop, specWidth, specHeight);

		ctx.strokeStyle = "#fff";
		ctx.strokeRect(specLeft, specTop, specWidth, specHeight);
		ctx.fillStyle = "#fff";
		ctx.font = "10px sans-serif";
		ctx.fillText("Spectrogram", specLeft + specWidth / 2 - 35, specTop + 12);

		const freqTicks = [250, 500, 1000, 2000, 4000, 8000];
		ctx.font = "8px sans-serif";
		freqTicks.forEach((f) => {
			if (f >= FREQ_MIN && f <= FREQ_MAX) {
				const logF = Math.log10(f);
				const logMin = Math.log10(FREQ_MIN);
				const logMax = Math.log10(FREQ_MAX);
				const y = specTop + specHeight - ((logF - logMin) / (logMax - logMin)) * specHeight;
				ctx.fillText(f >= 1000 ? `${f / 1000}k` : String(f), specLeft + 2, y + 3);
			}
		});

		// Waveform - bottom
		ctx.fillStyle = "#000";
		ctx.fillRect(specLeft, waveTop, waveWidth, waveHeight);
		ctx.fillStyle = "rgba(255,255,255,0.7)";

		const waveLen = waveform.length;
		ctx.beginPath();
		for (let i = 0; i < waveWidth; i++) {
			const idx = Math.floor((i / waveWidth) * waveLen);
			const val = waveform[idx] || 0;
			const x = specLeft + i;
			const y = waveTop + waveHeight / 2 - (val * waveHeight) / 2.2;
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		for (let i = waveWidth - 1; i >= 0; i--) {
			const idx = Math.floor((i / waveWidth) * waveLen);
			const val = waveform[idx] || 0;
			const x = specLeft + i;
			const y = waveTop + waveHeight / 2 + (val * waveHeight) / 2.2;
			ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.fill();

		// Red bar - playback position
		const barX = specLeft + playbackProgress * waveWidth;
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(barX - 1, waveTop, 3, waveHeight);

		ctx.strokeStyle = "#fff";
		ctx.strokeRect(specLeft, waveTop, waveWidth, waveHeight);
		ctx.fillStyle = "#fff";
		ctx.font = "9px sans-serif";
		ctx.fillText("Amplitude over time", specLeft + waveWidth / 2 - 50, waveTop + 12);

		const nTicks = 6;
		for (let i = 0; i <= nTicks; i++) {
			const t = tStart + (i / nTicks) * (tEnd - tStart);
			const x = specLeft + (i / nTicks) * waveWidth;
			ctx.fillText(String(Math.round(t)), x - 6, waveTop + waveHeight - 2);
		}

		// Colorbar - bottom left
		const cbarLeft = psdLeft;
		const cbarWidth = psdWidth;
		const cbarH = waveHeight * 0.6;
		const cbarY = waveTop + (waveHeight - cbarH) / 2;
		ctx.fillStyle = "#000";
		ctx.fillRect(cbarLeft, waveTop, cbarWidth, waveHeight);
		for (let i = 0; i < cbarWidth; i++) {
			const t = i / cbarWidth;
			const [r, g, b] = viridis(t);
			ctx.fillStyle = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
			ctx.fillRect(cbarLeft + i, cbarY, 1, cbarH);
		}
		ctx.fillStyle = "#fff";
		ctx.font = "8px sans-serif";
		ctx.fillText("dBFS", cbarLeft + 2, waveTop + 10);
		ctx.fillText("0", cbarLeft + cbarWidth - 8, cbarY + 8);
		ctx.fillText("-80", cbarLeft + 2, cbarY + cbarH - 2);

		ctx.restore();
	}, [data, playbackProgress]);

	// Audio playback sync
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const onTimeUpdate = () => {
			if (audio.duration && !isNaN(audio.duration)) {
				setPlaybackProgress(audio.currentTime / audio.duration);
			}
		};
		const onEnded = () => setPlaybackProgress(0);
		const onPlay = () => setPlaybackProgress(audio.currentTime / (audio.duration || 1));
		const onPause = () => setPlaybackProgress(audio.currentTime / (audio.duration || 1));

		audio.addEventListener("timeupdate", onTimeUpdate);
		audio.addEventListener("ended", onEnded);
		audio.addEventListener("play", onPlay);
		audio.addEventListener("pause", onPause);

		return () => {
			audio.removeEventListener("timeupdate", onTimeUpdate);
			audio.removeEventListener("ended", onEnded);
			audio.removeEventListener("play", onPlay);
			audio.removeEventListener("pause", onPause);
		};
	}, [audioUrl]);

	return (
		<div className="create-spectrogram-canvas-wrapper">
			<div className="create-spectrogram-container">
				<canvas ref={canvasRef} className="create-spectrogram-canvas" />
			</div>
			<audio
				ref={audioRef}
				src={audioUrl}
				controls
				className="create-spectrogram-audio"
			/>
			<p className="create-spectrogram-note">
				Spectrogram, PSD, and waveform. Play audio to see the red bar move. First 2 min shown for long recordings.
			</p>
		</div>
	);
}

CreateSpectrogram.propTypes = {
	record: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		audioFilePath: PropTypes.string,
	}).isRequired,
	variant: PropTypes.string,
	size: PropTypes.string,
	buttonLabel: PropTypes.string,
	iconOnly: PropTypes.bool,
};

export default CreateSpectrogram;
