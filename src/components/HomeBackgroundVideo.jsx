import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../Styles/HomeBackgroundVideo.css";

const VIDEO_URL =
	"https://soundingicetestbucket.s3.eu-west-2.amazonaws.com/VIDEO/SI_Landing_Page_msggt0.mp4";

const HomeBackgroundVideo = ({ isActive }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		if (!isActive) {
			video.pause();
			return;
		}

		const playVideo = () => {
			const attempt = video.play();
			if (attempt?.catch) {
				attempt.catch(() => {});
			}
		};

		const resume = () => {
			if (video.readyState >= 2) {
				playVideo();
			} else {
				video.load();
			}
		};

		video.addEventListener("loadeddata", playVideo);
		video.addEventListener("canplay", playVideo);
		video.addEventListener("canplaythrough", playVideo);

		resume();

		return () => {
			video.removeEventListener("loadeddata", playVideo);
			video.removeEventListener("canplay", playVideo);
			video.removeEventListener("canplaythrough", playVideo);
		};
	}, [isActive]);

	return (
		<div
			className={`home-video-layer${isActive ? " is-active" : ""}`}
			aria-hidden={!isActive}
		>
			<video
				ref={videoRef}
				src={VIDEO_URL}
				muted
				loop
				playsInline
				preload='auto'
				className='home-background-video'
			/>
		</div>
	);
};

HomeBackgroundVideo.propTypes = {
	isActive: PropTypes.bool.isRequired,
};

export default HomeBackgroundVideo;
