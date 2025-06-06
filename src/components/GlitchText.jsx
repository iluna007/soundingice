import { useRef } from "react";
import "../Styles/GlitchText.css";
import PropTypes from "prop-types";

const GlitchText = ({ children }) => {
	const audioRef = useRef(
		new Audio(
			"https://soundingicetestbucket.s3.eu-west-2.amazonaws.com/Effects/breakingice_effect_ykj6v5.mp3"
		)
	);

	const stopAudio = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
	};

	const handleMouseEnter = () => {
		audioRef.current.currentTime = 0;
		audioRef.current.play();
	};

	const handleMouseLeave = () => {
		stopAudio();
	};

	const handleClick = () => {
		stopAudio();
	};

	return (
		<span
			className='glitch-text'
			data-text={children}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			{children}
		</span>
	);
};

GlitchText.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GlitchText;
