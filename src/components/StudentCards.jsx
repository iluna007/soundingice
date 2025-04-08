import React from "react";
import PropTypes from "prop-types";
import "../Styles/StudentCard.css";

const StudentCard = ({ student }) => {
	return (
		<div className='student-card'>
			<img
				src={student.image}
				alt={`Picture for ${student.name}`}
				className='student-image'
				loading='lazy'
				onError={(e) => {
					e.target.onerror = null;
					e.target.src =
						"https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image";
				}}
			/>
			<div className='student-name'>
				<h3>{student.name}</h3>
			</div>
		</div>
	);
};

StudentCard.propTypes = {
	student: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

export default StudentCard;
