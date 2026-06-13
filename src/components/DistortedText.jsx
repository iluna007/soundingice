import { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import "../Styles/DistortedText.css";

const SLICES = 8;

const computeCharOffset = (index, total, mx, my) => {
	const cx = (index + 0.5) / total;
	const dx = cx - mx;
	const dy = my - 0.5;
	const dist = Math.hypot(dx, dy * 1.1);
	const strength = Math.max(0, 1 - dist * 1.8);
	return {
		tx: dx * strength * 52,
		ty: dy * strength * 38,
		skew: dx * strength * 16,
	};
};

const computeSliceOffset = (slice, mx, my) => {
	const center = (slice + 0.5) / SLICES;
	const dy = my - center;
	const dist = Math.abs(dy);
	const strength = Math.max(0, 1 - dist * 2.2);
	return {
		tx: (mx - 0.5) * strength * 28,
		ty: dy * strength * 42,
	};
};

const DistortedText = ({ children = "SOUNDING", className = "" }) => {
	const rootRef = useRef(null);
	const charRefs = useRef([]);
	const sliceRefs = useRef([]);

	const text = String(children);
	const chars = useMemo(() => [...text], [text]);

	const applyDistortion = (mx, my) => {
		const total = chars.length;

		charRefs.current.forEach((el, i) => {
			if (!el) return;
			const { tx, ty, skew } = computeCharOffset(i, total, mx, my);
			el.style.transform = `translate(${tx}px, ${ty}px) skewX(${skew}deg)`;
		});

		sliceRefs.current.forEach((el) => {
			if (!el) return;
			const slice = Number(el.dataset.slice);
			const channel = el.dataset.channel;
			const { tx, ty } = computeSliceOffset(slice, mx, my);
			const sign = channel === "b" ? -1 : channel === "y" ? 0.6 : 1;
			const xOff = channel === "r" ? -10 : channel === "b" ? 10 : 4;
			const yOff = channel === "y" ? -6 : 0;

			el.style.transform = `translate(${tx * sign + xOff}px, ${ty * sign + yOff}px)`;
		});
	};

	const resetDistortion = () => {
		charRefs.current.forEach((el) => {
			if (el) el.style.transform = "";
		});
		sliceRefs.current.forEach((el) => {
			if (el) el.style.transform = "";
		});
	};

	const track = (clientX, clientY) => {
		const el = rootRef.current;
		if (!el) return;

		const rect = el.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return;

		const mx = (clientX - rect.left) / rect.width;
		const my = (clientY - rect.top) / rect.height;

		el.classList.add("is-active");
		el.style.setProperty("--mx", String(mx));
		el.style.setProperty("--my", String(my));
		applyDistortion(mx, my);
	};

	const handleLeave = () => {
		const el = rootRef.current;
		if (!el) return;
		el.classList.remove("is-active");
		el.style.setProperty("--mx", "0.5");
		el.style.setProperty("--my", "0.5");
		resetDistortion();
	};

	const renderChar = (char, i, layerClass) => (
		<span
			key={`${layerClass}-${i}`}
			ref={(node) => {
				if (layerClass === "distort-text__char--main") {
					charRefs.current[i] = node;
				}
			}}
			className={`distort-text__char ${layerClass}`}
		>
			{char === " " ? "\u00A0" : char}
		</span>
	);

	const sliceElements = [];
	let sliceIndex = 0;

	["r", "y", "b"].forEach((channel) => {
		for (let slice = 0; slice < SLICES; slice++) {
			const idx = sliceIndex;
			sliceElements.push(
				<span
					key={`${channel}-${slice}`}
					ref={(node) => {
						sliceRefs.current[idx] = node;
					}}
					data-slice={slice}
					data-channel={channel}
					className={`distort-text__slice distort-text__slice--${channel}`}
					style={{ "--slice": slice }}
				>
					{chars.map((char, i) =>
						renderChar(char, i, `distort-text__char--${channel}`)
					)}
				</span>
			);
			sliceIndex++;
		}
	});

	return (
		<span
			ref={rootRef}
			className={`distort-text ${className}`.trim()}
			data-text={text}
			onPointerMove={(e) => track(e.clientX, e.clientY)}
			onPointerEnter={(e) => track(e.clientX, e.clientY)}
			onMouseMove={(e) => track(e.clientX, e.clientY)}
			onMouseEnter={(e) => track(e.clientX, e.clientY)}
			onPointerLeave={handleLeave}
			onMouseLeave={handleLeave}
		>
			<span className='distort-text__fx' aria-hidden='true'>
				{sliceElements}
			</span>
			<span className='distort-text__main'>
				{chars.map((char, i) => renderChar(char, i, "distort-text__char--main"))}
			</span>
		</span>
	);
};

DistortedText.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default DistortedText;
