import { useEffect, useState, useCallback } from "react";
import store from "../flux/store";
import { fetchData1 } from "../flux/actions";
import RecordingCard from "../components/RecordingCard";
import MapEmbed from "../components/MapEmbeded";
import Masonry from "react-masonry-css";
import "../Styles/FieldRecordings.css";

const ITEMS_PER_PAGE = 20;

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

	const handleUpdate = useCallback(() => {
		const data = store.getAll() || [];
		setRecords(data);
	}, []);

	useEffect(() => {
		fetchData1();
		store.on("change", handleUpdate);
		return () => store.off("change", handleUpdate);
	}, [handleUpdate]);

	// Generar listas únicas de nombres individuales para recordist, keywords y conditions
	const allRecordistNames = records.flatMap((r) =>
		r.recordist ? r.recordist.split(",").map((name) => name.trim()) : []
	);
	const distinctRecordists = [...new Set(allRecordistNames)];

	const distinctKeywords = [
		...new Set(
			records.flatMap((r) =>
				r.tags ? r.tags.split(",").map((k) => k.trim()) : []
			)
		),
	];

	const allConditions = records.flatMap((r) =>
		r.conditions ? r.conditions.split(",").map((c) => c.trim()) : []
	);
	const distinctConditions = [...new Set(allConditions)];

	

	useEffect(() => {
		let filtered = records;
		if (filters.recordist)
			filtered = filtered.filter((r) =>
				r.recordist
					.split(",")
					.map((name) => name.trim())
					.includes(filters.recordist)
			);
		if (filters.tags)
			filtered = filtered.filter((r) =>
				r.tags
					.split(",")
					.map((t) => t.trim().toLowerCase())
					.includes(filters.tags.toLowerCase())
			);
		if (filters.conditions)
			filtered = filtered.filter((r) =>
				r.conditions
					.split(",")
					.map((c) => c.trim())
					.includes(filters.conditions)
			);
		

		// Orden aleatorio si no hay ningún filtro activo
		if (
			!filters.recordist &&
			!filters.tags &&
			!filters.conditions 
		) {
			filtered = filtered.slice().sort(() => Math.random() - 0.5);
		}
		setFilteredRecords(filtered);
		setCurrentPage(1); // Reinicia la paginación con cada cambio de filtro
	}, [records, filters]);

	const handleFilterClick = (column, value) => {
		setFilters((prev) => ({
			...prev,
			[column]: prev[column] === value ? "" : value,
		}));
	};

	const handleToggleCard = (cardId, viewMode) => {
		if (
			expandedCard &&
			expandedCard.id === cardId &&
			expandedCard.view === viewMode
		) {
			setExpandedCard(null);
		} else {
			setExpandedCard({ id: cardId, view: viewMode });
		}
	};

	// Paginación: calcular el subset a mostrar
	const indexOfLast = currentPage * ITEMS_PER_PAGE;
	const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
	const currentRecords = filteredRecords.slice(indexOfFirst, indexOfLast);
	const totalPages = Math.ceil(filteredRecords.length / ITEMS_PER_PAGE);

	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
	};

	// Componente de paginación usando estilo Bootstrap
	const renderPagination = () => (
		<nav aria-label='Page navigation'>
			<ul className='pagination justify-content-center'>
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<button
						className='page-link'
						onClick={() => handlePageChange(currentPage - 1)}
					>
						←
					</button>
				</li>
				{Array.from({ length: totalPages }, (_, i) => (
					<li
						key={i + 1}
						className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
					>
						{currentPage === i + 1 ? (
							<span className='page-link'>
								{i + 1} <span className='sr-only'></span>
							</span>
						) : (
							<button
								className='page-link'
								onClick={() => handlePageChange(i + 1)}
							>
								{i + 1}
							</button>
						)}
					</li>
				))}
				<li
					className={`page-item ${
						currentPage === totalPages ? "disabled" : ""
					}`}
				>
					<button
						className='page-link'
						onClick={() => handlePageChange(currentPage + 1)}
					>
						→
					</button>
				</li>
			</ul>
		</nav>
	);

	// Define breakpoints para el layout de Masonry
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<h2 className='title'>Field Recordings</h2>
				<div className='row mt-5'>
					<div className='row mt-12'>
						<p className='description'>
							Technology must also be held accountable as part of an
							ecologically valid practice. Microphones and recording kits, made
							from minerals extracted from the earth through precarious and
							dangerous labour, imply that neither sound capture nor its
							consequent representations can ever be separate from the
							geopolitical resources and networks that allow signals to be
							captured in the first place. Gripping a microphone confirms there
							is no impartial position, no benign technology, no objective
							recording.—Mark Peter Wright,{" "}
							<em>
								Listening After Nature: Field Recording, Ecology, Critical
								Practice
							</em>
						</p>
					</div>
					<div className='col-md-2'>
						<h3 className='subtitles'>Recordist</h3>
						<hr />
						<div className='filter-group'>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.recordist ? "active" : ""}`}
									onClick={() => handleFilterClick("recordist", "")}
								>
									All
								</button>
								{distinctRecordists.map((name) => (
									<button
										key={name}
										className={`filter-btn ${
											filters.recordist === name ? "active" : ""
										}`}
										onClick={() => handleFilterClick("recordist", name)}
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
									onClick={() => handleFilterClick("tags", "")}
								>
									All
								</button>
								{distinctKeywords.map((keyword) => (
									<button
										key={keyword}
										className={`filter-btn ${
											filters.tags === keyword ? "active" : ""
										}`}
										onClick={() => handleFilterClick("tags", keyword)}
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
									className={`filter-btn ${
										!filters.conditions ? "active" : ""
									}`}
									onClick={() => handleFilterClick("conditions", "")}
								>
									All
								</button>
								{distinctConditions.map((condition) => (
									<button
										key={condition}
										className={`filter-btn ${
											filters.conditions === condition ? "active" : ""
										}`}
										onClick={() => handleFilterClick("conditions", condition)}
									>
										{condition}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className='col-md-5'>
						{/* Paginación superior */}
						{renderPagination()}
						<div className='recording-list'>
							{filteredRecords.length > 0 ? (
								<>
									<Masonry
										breakpointCols={breakpointColumnsObj}
										className='my-masonry-grid'
										columnClassName='my-masonry-grid_column'
									>
										{currentRecords.map((record) => (
											<RecordingCard
												key={record.id}
												record={record}
												expanded={expandedCard && expandedCard.id === record.id}
												viewMode={
													expandedCard && expandedCard.id === record.id
														? expandedCard.view
														: null
												}
												onToggle={handleToggleCard}
											/>
										))}
									</Masonry>
								</>
							) : (
								<p>No recordings available.</p>
							)}
						</div>
						{/* Paginación inferior */}
						{renderPagination()}
					</div>
					<div className='col-md-5'>
						<MapEmbed />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FieldRecordings;
