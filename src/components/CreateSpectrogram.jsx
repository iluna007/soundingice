import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {
	computeSpectrogram,
	filterSpectrogram,
	MIN_THRESHOLD_DB,
} from "../utils/spectrogramUtils";
import SpectrogramCanvas from "./SpectrogramCanvas";
import "../Styles/CreateSpectrogram.css";

const S3_BASE = "https://soundingicetestbucket.s3.eu-west-2.amazonaws.com";
const S3_PROXY = "/s3-audio";

const getProxyUrl = (url) =>
	url?.includes("soundingicetestbucket.s3.eu-west-2.amazonaws.com")
		? url.replace(S3_BASE, S3_PROXY)
		: url;

const CreateSpectrogram = ({
	record,
	variant = "dark",
	size,
	buttonLabel = "Create Spectrogram",
	iconOnly = false,
}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [spectrogramData, setSpectrogramData] = useState(null);

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
			const proxyUrl = getProxyUrl(record.audioFilePath);
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

			setSpectrogramData({
				...filtered,
				psd: { f: fFiltered, psd_db: psdDb },
				waveform: samplesToUse,
				sampleRate,
				tStart: -lenSec,
				tEnd: 0,
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
					<Modal.Title>Spectrogram — {record?.id || "Recording"}</Modal.Title>
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
