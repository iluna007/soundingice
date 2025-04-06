import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import GlitchText from "../components/GlitchText";

const Home = () => {
	const videoRef = useRef(null);
	const videoUrl =
		"https://res.cloudinary.com/drc27xzb4/video/upload/v1743579679/SI_Landing_Page_msggt0.mp4";

	useEffect(() => {
		const video = videoRef.current;
		const playVideo = () => video.play();
		video.addEventListener("canplay", playVideo);
		return () => {
			video.removeEventListener("canplay", playVideo);
		};
	}, []);

	return (
		<div className='home-container'>
			<div className='video-container'>
				<video
					ref={videoRef}
					src={videoUrl}
					autoPlay
					loop
					muted
					playsInline
					className='background-video'
				/>
			</div>
			<div className='content-overlay'>
				<div className='home-content'>
					<h1 className='titlehome'>
						SOUNDING{" "}
						<Link
							to='/fieldrecordings'
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<GlitchText>ICE</GlitchText>
						</Link>
					</h1>
					<p className='description1'>
						An acoustic cartography exploring the signals of climate change
						found in and around the Yukon and Klondike Rivers—their confluences
						and histories.
					</p>
					<p className='description2'>
						This sound mapping project acknowledges the vital presence of the
						Tr’ondëk Hwëch’in First Nation based in Dawson City, which includes
						descendants of the Hän-speaking people, who have lived along the
						Yukon River for millennia, and families descended from Gwich’in,
						Northern Tutchone and other language groups.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
