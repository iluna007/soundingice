import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import HomeBackgroundVideo from "./components/HomeBackgroundVideo";
import "./Styles/Layout.css";

const pages = [
	{ title: "Home", route: "/", color: "#ffffff", icon: "ac_unit" },
	{
		title: "Field Recordings",
		route: "/fieldrecordings",
		color: "#ffff00",
		icon: "graphic_eq",
	},
	{
		title: "Field Works",
		route: "/fieldworks",
		color: "#ff00ff",
		icon: "asterisk",
	},
	{
		title: "Resources",
		route: "/resources",
		color: "#000000",
		icon: "bookmark",
	},
	{ title: "About", route: "/about", color: "#00ffff", icon: "info" },
];

const scrollbarColors = {
	"#ffffff": { track: "#dddddd", thumb: "#bbbbbb" },
	"#ffff00": { track: "#cccc00", thumb: "#aaaa00" },
	"#ff00ff": { track: "#990099", thumb: "#770077" },
	"#000000": { track: "#333333", thumb: "#222222" },
	"#00ffff": { track: "#009999", thumb: "#007777" },
};

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return width;
}

export default function Layout({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const width = useWindowWidth();
	const activeIndex = pages.findIndex(
		(page) => page.route === location.pathname
	);

	useEffect(() => {
		const scrollEl = document.querySelector(".section.expanded .scrollable-content");
		if (scrollEl) scrollEl.scrollTop = 0;
	}, [location.pathname]);

	// Mobile layout: if width is less than 768px, show a top nav bar.
	if (width < 768) {
		return (
			<div className='mobile-layout'>
				<div className='mobile-nav'>
					{pages.map((page, index) => {
						const isActive = index === activeIndex;
						const iconColor =
							page.route === "/resources" ? "#ffffff" : "#000000";
						return (
							<div
								key={page.route}
								className={`mobile-nav-item ${isActive ? "active" : ""}`}
								style={{ backgroundColor: page.color }}
								onClick={() => {
									if (!isActive) navigate(page.route);
								}}
							>
								<span
									className='material-symbols-outlined'
									style={{
										color: iconColor,
										fontSize: "clamp(18px, 5vw, 24px)",
									}}
								>
									{page.icon}
								</span>
							</div>
						);
					})}
				</div>
				<div
					className='mobile-content'
					style={{
						position: "relative",
						backgroundColor: pages[activeIndex]?.color || "#ffffff",
						color:
							pages[activeIndex]?.route === "/resources"
								? "#ffffff"
								: "inherit",
					}}
				>
					<HomeBackgroundVideo isActive={location.pathname === "/"} />
					<div
						className='scrollable-content mobile-scrollable-content'
						style={{
							padding: activeIndex === 0 ? 0 : "20px",
							"--scrollbar-track": pages[activeIndex]
								? scrollbarColors[pages[activeIndex].color].track
								: "#222",
							"--scrollbar-thumb": pages[activeIndex]
								? scrollbarColors[pages[activeIndex].color].thumb
								: "#555",
						}}
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</div>
				</div>
			</div>
		);
	}

	// Desktop layout: five sections arranged horizontally.
	return (
		<div className='layout-container'>
			{pages.map((page, index) => {
				const isActive = index === activeIndex;
				const sectionClass = isActive ? "section expanded" : "section narrow";
				const iconColor = page.route === "/resources" ? "#ffffff" : "#000000";
				return (
					<div
						key={page.route}
						className={sectionClass}
						style={{ backgroundColor: page.color, position: "relative" }}
						onClick={() => {
							if (!isActive) navigate(page.route);
						}}
					>
						{page.route === "/" && <HomeBackgroundVideo isActive={isActive} />}
						{isActive ? (
							<div
								className={`scrollable-content${page.route === "/" ? " home-scrollable-content" : ""}`}
								style={{
									padding: activeIndex === 0 ? 0 : "20px",
									"--scrollbar-track": scrollbarColors[page.color].track,
									"--scrollbar-thumb": scrollbarColors[page.color].thumb,
									color: page.route === "/resources" ? "#ffffff" : "inherit",
								}}
								onClick={(e) => e.stopPropagation()}
							>
								{children}
							</div>
						) : (
							<div className='icon-container'>
								<span
									className='material-symbols-outlined'
									style={{
										color: iconColor,
										fontSize: "clamp(18px, 5vw, 24px)",
									}}
								>
									{page.icon}
								</span>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
