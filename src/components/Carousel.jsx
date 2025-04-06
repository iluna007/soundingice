import React, { useState } from "react";
import "../Styles/Carousel.css";

const Carousel = ({ galleryItems }) => {
	const [selectedMedia, setSelectedMedia] = useState(galleryItems[0]);

	const handleMediaClick = (src) => {
		setSelectedMedia(src);
	};

	return (
		<div className='carousel-container'>
			{/* Imagen seleccionada en grande */}
			<div className='selected-media'>
				{selectedMedia.includes("vimeo.com") ? (
					<iframe
						src={selectedMedia}
						title='Project Video'
						style={{ width: "100%", height: "500px", border: "none" }}
						allowFullScreen
					></iframe>
				) : (
					<img
						src={selectedMedia}
						alt='Selected'
						className='img-fluid rounded'
						style={{ width: "70%", maxHeight: "100%", objectFit: "contain" }}
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = "/path/to/default-thumbnail.jpg";
						}}
					/>
				)}
			</div>

			{/* Carrusel de miniaturas */}
			<div className='carousel-thumbnails'>
				{/* Botón para desplazarse a la izquierda */}
				<button
					className='carousel-control-left'
					onClick={() => {
						const scrollContainer =
							document.querySelector(".horizontal-scroll");
						scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='black'
						viewBox='0 0 16 16'
					>
						<path
							fillRule='evenodd'
							d='M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5'
						></path>
					</svg>
				</button>

				{/* Contenedor de miniaturas con ancho limitado y overflow hidden */}
				<div className='horizontal-scroll'>
					{galleryItems.map((item, index) => (
						<div
							className='thumbnail-container'
							key={index}
							onClick={() => handleMediaClick(item)}
						>
							<img
								src={item}
								alt={`Thumbnail ${index + 1}`}
								className='img-fluid'
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "/path/to/default-thumbnail.jpg";
								}}
							/>
						</div>
					))}
				</div>

				{/* Botón para desplazarse a la derecha */}
				<button
					className='carousel-control-right'
					onClick={() => {
						const scrollContainer =
							document.querySelector(".horizontal-scroll");
						scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='black'
						viewBox='0 0 16 16'
					>
						<path
							fillRule='evenodd'
							d='M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
