import PropTypes from "prop-types";

const KeyWordsCell = ({ record }) => {
	const raw = record.tags || record["Key Words"];
	if (!raw) return "—";
	const tags = raw.split(",").map((t) => t.trim()).filter(Boolean);
	return tags.length > 0 ? (
		tags.map((tag, i) => (
			<span key={i} className='full-list-tag-chip'>
				{tag}
			</span>
		))
	) : (
		"—"
	);
};

KeyWordsCell.propTypes = {
	record: PropTypes.shape({
		tags: PropTypes.string,
		"Key Words": PropTypes.string,
	}).isRequired,
};

export default KeyWordsCell;
