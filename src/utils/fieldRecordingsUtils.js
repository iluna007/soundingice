/**
 * Utilidades para Field Recordings: ordenamiento y filtrado
 */

export const parseDateForSort = (dateStr) => {
	if (!dateStr) return 0;
	const parts = String(dateStr).split("/");
	if (parts.length >= 2) return parseInt(parts[0], 10) * 100 + parseInt(parts[1], 10);
	return 0;
};

export const parseTimeForSort = (timeStr) => {
	if (!timeStr) return "";
	return String(timeStr).replace(/:/g, "");
};

export const sortRecords = (records, sortBy, sortOrder) => {
	if (!sortBy) return records;
	return [...records].sort((a, b) => {
		let cmp = 0;
		if (sortBy === "date") {
			cmp = parseDateForSort(a.date) - parseDateForSort(b.date);
		} else if (sortBy === "time") {
			cmp = parseTimeForSort(a.time).localeCompare(parseTimeForSort(b.time));
		} else if (sortBy === "id") {
			cmp = Number(a.id) - Number(b.id);
		} else if (sortBy === "conditions") {
			cmp = (a.conditions || "").localeCompare(b.conditions || "");
		}
		return sortOrder === "desc" ? -cmp : cmp;
	});
};

export const extractDistinctValues = (records, field, splitBy = ",") => {
	const values = records.flatMap((r) => {
		const raw = r[field];
		if (!raw) return [];
		return String(raw)
			.split(splitBy)
			.map((v) => v.trim())
			.filter(Boolean);
	});
	return [...new Set(values)];
};
