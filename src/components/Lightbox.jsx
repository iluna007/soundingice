import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Lightbox.css";

const Lightbox = ({ galleryItems }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const openLightbox = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	const closeLightbox = () => {
		setIsOpen(false);
	};

	const goPrev = (e) => {
		e.stopPropagation();
		setCurrentIndex(
			(prev) => (prev - 1 + galleryItems.length) % galleryItems.length
		);
	};

	const goNext = (e) => {
		e.stopPropagation();
		setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
	};

	return (
		<div className='lightbox-gallery'>
			{/* Miniaturas para abrir el lightbox */}
			<div className='gallery-thumbnails'>
				{galleryItems.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Thumbnail ${index + 1}`}
						className='thumbnail'
						onClick={() => openLightbox(index)}
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = "/path/to/default-thumbnail.jpg";
						}}
					/>
				))}
			</div>

			{/* Lightbox: imagen ampliada con navegación */}
			{isOpen && (
				<div className='lightbox-overlay' onClick={closeLightbox}>
					<div
						className='lightbox-content'
						onClick={(e) => e.stopPropagation()}
					>
						<button className='lightbox-prev' onClick={goPrev}>
							‹
						</button>
						<img
							src={galleryItems[currentIndex]}
							alt={`Imagen ${currentIndex + 1}`}
							className='lightbox-image'
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "/path/to/default-thumbnail.jpg";
							}}
						/>
						<button className='lightbox-next' onClick={goNext}>
							›
						</button>
						<button className='lightbox-close' onClick={closeLightbox}>
							×
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

Lightbox.propTypes = {
	galleryItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Lightbox;
