import PropTypes from "prop-types";

const FilterSidebar = ({ filters, onFilterClick, distinctRecordists, distinctKeywords, distinctConditions }) => (
	<div className='col-md-2'>
		<h3 className='subtitles'>Recordist</h3>
		<hr />
		<div className='filter-group'>
			<div className='buttons'>
				<button
					className={`filter-btn ${!filters.recordist ? "active" : ""}`}
					onClick={() => onFilterClick("recordist", "")}
				>
					All
				</button>
				{distinctRecordists.map((name) => (
					<button
						key={name}
						className={`filter-btn ${filters.recordist === name ? "active" : ""}`}
						onClick={() => onFilterClick("recordist", name)}
					>
						{name}
					</button>
				))}
			</div>
		</div>
		<h3 className='subtitles'>Key Words</h3>
		<hr />
		<div className='filter-group'>
			<div className='buttons'>
				<button
					className={`filter-btn ${!filters.tags ? "active" : ""}`}
					onClick={() => onFilterClick("tags", "")}
				>
					All
				</button>
				{distinctKeywords.map((keyword) => (
					<button
						key={keyword}
						className={`filter-btn ${filters.tags === keyword ? "active" : ""}`}
						onClick={() => onFilterClick("tags", keyword)}
					>
						{keyword}
					</button>
				))}
			</div>
		</div>
		<h3 className='subtitles'>Conditions</h3>
		<hr />
		<div className='filter-group'>
			<div className='buttons'>
				<button
					className={`filter-btn ${!filters.conditions ? "active" : ""}`}
					onClick={() => onFilterClick("conditions", "")}
				>
					All
				</button>
				{distinctConditions.map((condition) => (
					<button
						key={condition}
						className={`filter-btn ${filters.conditions === condition ? "active" : ""}`}
						onClick={() => onFilterClick("conditions", condition)}
					>
						{condition}
					</button>
				))}
			</div>
		</div>
	</div>
);

FilterSidebar.propTypes = {
	filters: PropTypes.shape({
		recordist: PropTypes.string,
		tags: PropTypes.string,
		conditions: PropTypes.string,
	}).isRequired,
	onFilterClick: PropTypes.func.isRequired,
	distinctRecordists: PropTypes.arrayOf(PropTypes.string).isRequired,
	distinctKeywords: PropTypes.arrayOf(PropTypes.string).isRequired,
	distinctConditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSidebar;
