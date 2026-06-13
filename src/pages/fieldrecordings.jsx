import { useEffect, useState, useCallback } from "react";
import store from "../flux/store";
import { fetchData1, selectRecord } from "../flux/actions";
import RecordingCard from "../components/RecordingCard";
import MapEmbed from "../components/MapEmbeded";
import Masonry from "react-masonry-css";
import {
	FilterSidebar,
	Pagination,
	ViewToggle,
	FullListTable,
} from "../components/fieldrecordings";
import {
	sortRecords,
	extractDistinctValues,
} from "../utils/fieldRecordingsUtils";
import PageSection from "../components/PageSection";
import DistortedText from "../components/DistortedText";
import "../Styles/FieldRecordings.css";

const ITEMS_PER_PAGE = 20;
const LIST_ITEMS_PER_PAGE = 50;
const MASONRY_BREAKPOINTS = { default: 3, 1100: 2, 700: 1 };

const FieldRecordings = () => {
	const [records, setRecords] = useState([]);
	const [filters, setFilters] = useState({
		recordist: "",
		tags: "",
		conditions: "",
	});
	const [filteredRecords, setFilteredRecords] = useState([]);
	const [expandedCard, setExpandedCard] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMode, setViewMode] = useState("cards");
	const [sortBy, setSortBy] = useState(null);
	const [sortOrder, setSortOrder] = useState("asc");
	const [expandedRowId, setExpandedRowId] = useState(null);

	const handleUpdate = useCallback(() => {
		setRecords(store.getAll() || []);
	}, []);

	useEffect(() => {
		fetchData1();
		store.on("change", handleUpdate);
		return () => store.off("change", handleUpdate);
	}, [handleUpdate]);

	const distinctRecordists = extractDistinctValues(records, "recordist");
	const distinctKeywords = extractDistinctValues(records, "tags");
	const distinctConditions = extractDistinctValues(records, "conditions");

	useEffect(() => {
		let filtered = records;
		if (filters.recordist) {
			filtered = filtered.filter((r) =>
				r.recordist
					.split(",")
					.map((name) => name.trim())
					.includes(filters.recordist)
			);
		}
		if (filters.tags) {
			filtered = filtered.filter((r) =>
				r.tags
					.split(",")
					.map((t) => t.trim().toLowerCase())
					.includes(filters.tags.toLowerCase())
			);
		}
		if (filters.conditions) {
			filtered = filtered.filter((r) =>
				r.conditions
					.split(",")
					.map((c) => c.trim())
					.includes(filters.conditions)
			);
		}
		if (!filters.recordist && !filters.tags && !filters.conditions) {
			filtered = filtered.slice().sort(() => Math.random() - 0.5);
		}
		setFilteredRecords(filtered);
		setCurrentPage(1);
	}, [records, filters]);

	const handleFilterClick = (column, value) => {
		setFilters((prev) => ({ ...prev, [column]: prev[column] === value ? "" : value }));
	};

	const handleToggleCard = (cardId, view) => {
		setExpandedCard((prev) =>
			prev?.id === cardId && prev?.view === view ? null : { id: cardId, view }
		);
	};

	const handleRowClick = (record) => {
		selectRecord(record);
		setExpandedRowId((prev) => (prev === record.id ? null : record.id));
	};

	const handleSortClick = (column) => {
		if (sortBy === column) {
			setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
		} else {
			setSortBy(column);
			setSortOrder("asc");
		}
		setCurrentPage(1);
	};

	const handleViewChange = (mode) => {
		setViewMode(mode);
		setCurrentPage(1);
		if (mode === "list") setSortBy(null);
	};

	const sortedRecords =
		viewMode === "list" && sortBy
			? sortRecords(filteredRecords, sortBy, sortOrder)
			: filteredRecords;

	const itemsPerPage = viewMode === "list" ? LIST_ITEMS_PER_PAGE : ITEMS_PER_PAGE;
	const indexOfLast = currentPage * itemsPerPage;
	const indexOfFirst = indexOfLast - itemsPerPage;
	const currentRecords = sortedRecords.slice(indexOfFirst, indexOfLast);
	const totalPages = Math.ceil(sortedRecords.length / itemsPerPage);

	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
	};

	return (
		<div className='container-fluid'>
			<PageSection>
				<h2 className='title'>
					<DistortedText>Field Recordings</DistortedText>
				</h2>
				<div className='row mt-5 field-recordings-main align-items-stretch'>
					<div className='col-12'>
						<div className='row mt-12'>
							<p className='description'>
								Technology must also be held accountable as part of an ecologically
								valid practice. Microphones and recording kits, made from minerals
								extracted from the earth through precarious and dangerous labour,
								imply that neither sound capture nor its consequent representations
								can ever be separate from the geopolitical resources and networks
								that allow signals to be captured in the first place. Gripping a
								microphone confirms there is no impartial position, no benign
								technology, no objective recording.—Mark Peter Wright,{" "}
								<em>
									Listening After Nature: Field Recording, Ecology, Critical Practice
								</em>
							</p>
						</div>
					</div>

					{viewMode === "cards" && (
						<FilterSidebar
							filters={filters}
							onFilterClick={handleFilterClick}
							distinctRecordists={distinctRecordists}
							distinctKeywords={distinctKeywords}
							distinctConditions={distinctConditions}
						/>
					)}

					<div
						className={`field-recordings-list-col ${viewMode === "list" ? "col-md-7" : "col-md-5"}`}
					>
						<ViewToggle viewMode={viewMode} onViewChange={handleViewChange} />
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
						<div className='recording-list'>
							{filteredRecords.length > 0 ? (
								<>
									{viewMode === "cards" ? (
										<Masonry
											breakpointCols={MASONRY_BREAKPOINTS}
											className='my-masonry-grid'
											columnClassName='my-masonry-grid_column'
										>
											{currentRecords.map((record) => (
												<RecordingCard
													key={record.id}
													record={record}
													expanded={expandedCard?.id === record.id}
													viewMode={expandedCard?.id === record.id ? expandedCard.view : null}
													onToggle={handleToggleCard}
												/>
											))}
										</Masonry>
									) : (
										<FullListTable
											records={currentRecords}
											sortBy={sortBy}
											sortOrder={sortOrder}
											onSortClick={handleSortClick}
											expandedRowId={expandedRowId}
											onRowClick={handleRowClick}
										/>
									)}
								</>
							) : (
								<p>No recordings available.</p>
							)}
						</div>
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</div>

					<div className='col-md-5 field-recordings-map-col d-flex flex-column'>
						<div className='map-embed-wrapper'>
							<MapEmbed />
						</div>
					</div>
				</div>
			</PageSection>
		</div>
	);
};

export default FieldRecordings;
