import PropTypes from "prop-types";

const ViewToggle = ({ viewMode, onViewChange }) => (
	<div className='view-toggle'>
		<button
			className={`view-toggle-btn ${viewMode === "cards" ? "active" : ""}`}
			onClick={() => onViewChange("cards")}
		>
			Cards View
		</button>
		<button
			className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
			onClick={() => onViewChange("list")}
		>
			Full List View
		</button>
	</div>
);

ViewToggle.propTypes = {
	viewMode: PropTypes.oneOf(["cards", "list"]).isRequired,
	onViewChange: PropTypes.func.isRequired,
};

export default ViewToggle;
