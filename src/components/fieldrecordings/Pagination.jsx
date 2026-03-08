import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
	<nav aria-label='Page navigation'>
		<ul className='pagination justify-content-center'>
			<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
				<button className='page-link' onClick={() => onPageChange(currentPage - 1)}>
					←
				</button>
			</li>
			{Array.from({ length: totalPages }, (_, i) => (
				<li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
					{currentPage === i + 1 ? (
						<span className='page-link'>{(i + 1).toString()}</span>
					) : (
						<button className='page-link' onClick={() => onPageChange(i + 1)}>
							{i + 1}
						</button>
					)}
				</li>
			))}
			<li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
				<button className='page-link' onClick={() => onPageChange(currentPage + 1)}>
					→
				</button>
			</li>
		</ul>
	</nav>
);

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
