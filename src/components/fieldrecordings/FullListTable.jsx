import PropTypes from "prop-types";
import CreateSpectrogram from "../CreateSpectrogram";
import KeyWordsCell from "./KeyWordsCell";

const FullListTable = ({
	records,
	sortBy,
	sortOrder,
	onSortClick,
	expandedRowId,
	onRowClick,
}) => (
	<div className='full-list-view'>
		<div className='full-list-header'>
			<span className='full-list-col full-list-action'>STFT</span>
			<button
				type='button'
				className={`full-list-col full-list-sortable ${sortBy === "date" ? "active" : ""}`}
				onClick={() => onSortClick("date")}
			>
				Date {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
			</button>
			<button
				type='button'
				className={`full-list-col full-list-sortable ${sortBy === "time" ? "active" : ""}`}
				onClick={() => onSortClick("time")}
			>
				Time {sortBy === "time" && (sortOrder === "asc" ? "↑" : "↓")}
			</button>
			<button
				type='button'
				className={`full-list-col full-list-sortable full-list-id ${sortBy === "id" ? "active" : ""}`}
				onClick={() => onSortClick("id")}
			>
				Recording {sortBy === "id" && (sortOrder === "asc" ? "↑" : "↓")}
			</button>
			<span className='full-list-col full-list-recordist'>Recordist</span>
			<button
				type='button'
				className={`full-list-col full-list-sortable ${sortBy === "conditions" ? "active" : ""}`}
				onClick={() => onSortClick("conditions")}
			>
				Conditions {sortBy === "conditions" && (sortOrder === "asc" ? "↑" : "↓")}
			</button>
			<span className='full-list-col full-list-equipment'>Equipment</span>
			<span className='full-list-col full-list-tags'>Key Words</span>
			<span className='full-list-col full-list-observations'>Observations</span>
		</div>
		{records.map((record) => (
			<div
				key={record.id}
				className={`full-list-row ${expandedRowId === record.id ? "expanded" : ""}`}
				onClick={() => onRowClick(record)}
				role='button'
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onRowClick(record);
					}
				}}
			>
				<span
					className='full-list-col full-list-action'
					onClick={(e) => e.stopPropagation()}
				>
					<CreateSpectrogram record={record} variant='outline-dark' size='sm' iconOnly />
				</span>
				<span className='full-list-col full-list-date'>{record.date}</span>
				<span className='full-list-col full-list-time'>{record.time || "—"}</span>
				<span className='full-list-col full-list-id'>{record.id}</span>
				<span className='full-list-col full-list-recordist'>{record.recordist}</span>
				<span className='full-list-col full-list-conditions'>
					{record.conditions || "—"}
				</span>
				<span className='full-list-col full-list-equipment'>
					{record.equipment
						? Array.isArray(record.equipment)
							? record.equipment.join(", ")
							: record.equipment
						: "—"}
				</span>
				<span className='full-list-col full-list-tags'>
					<KeyWordsCell record={record} />
				</span>
				<span className='full-list-col full-list-observations'>
					{record.observations && Array.isArray(record.observations)
						? record.observations.join(" • ")
						: "—"}
				</span>
			</div>
		))}
	</div>
);

FullListTable.propTypes = {
	records: PropTypes.arrayOf(PropTypes.object).isRequired,
	sortBy: PropTypes.string,
	sortOrder: PropTypes.oneOf(["asc", "desc"]),
	onSortClick: PropTypes.func.isRequired,
	expandedRowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onRowClick: PropTypes.func.isRequired,
};

export default FullListTable;
