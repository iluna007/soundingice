import { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { FaMapMarker } from "react-icons/fa";
import store from "../flux/store";
import { selectRecord } from "../flux/actions";
import "mapbox-gl/dist/mapbox-gl.css";
import mlcontour from "maplibre-contour";

// Set the global Mapbox token
mapboxgl.accessToken =
	"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY203NjMwZHptMHAzaDJrcXlrbnNuMHJlZiJ9.hkoRlM6gQ-BflcGjpI40GA";

const MapEmbed = () => {
	// Estado viewport sin propiedades no soportadas (ej. position)
	const [viewport, setViewport] = useState({
		latitude: 64.061239,
		longitude: -139.43228,
		zoom: 14,
		pitch: 0,
		bearing: 0,
	});
	const [records, setRecords] = useState(store.getAll());
	const [selectedRecord, setSelectedRecord] = useState(
		store.getSelectedRecord()
	);
	const mapRef = useRef(null);

	// Actualiza registros en store
	useEffect(() => {
		const update = () => {
			setRecords(store.getAll());
			setSelectedRecord(store.getSelectedRecord());
		};
		store.on("change", update);
		return () => store.off("change", update);
	}, []);

	// Forzar resize en cambios de tamaño de ventana y cuando se monta el mapa
	useEffect(() => {
		const handleResize = () => {
			if (mapRef.current) {
				const map = mapRef.current.getMap();
				if (map) map.resize();
			}
		};
		window.addEventListener("resize", handleResize);
		// Llamada con retraso para el primer render y cuando el contenedor se muestra
		setTimeout(handleResize, 500);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleMapLoad = () => {
		const map = mapRef.current.getMap();

		// Configuración de mlcontour para contornos basados en DEM
		const demSource = new mlcontour.DemSource({
			url: "https://demotiles.maplibre.org/terrain-tiles/{z}/{x}/{y}.png",
			encoding: "mapbox",
			maxzoom: 14,
			worker: true,
		});
		demSource.setupMaplibre(mapboxgl);

		if (!map.getSource("hillshadeSource")) {
			map.addSource("hillshadeSource", {
				type: "raster-dem",
				tiles: [demSource.sharedDemProtocolUrl],
				tileSize: 512,
				maxzoom: 14,
			});
		}
		if (!map.getLayer("hills")) {
			map.addLayer({
				id: "hills",
				type: "hillshade",
				source: "hillshadeSource",
				layout: { visibility: "visible" },
				paint: { "hillshade-exaggeration": 5 },
			});
		}
		if (!map.getSource("contourSourceFeet")) {
			map.addSource("contourSourceFeet", {
				type: "vector",
				tiles: [
					demSource.contourProtocolUrl({
						multiplier: 3.28084,
						overzoom: 1,
						thresholds: {
							11: [200, 1000],
							12: [100, 500],
							13: [100, 500],
							14: [50, 200],
							15: [20, 100],
						},
						elevationKey: "ele",
						levelKey: "level",
						contourLayer: "contours",
					}),
				],
				maxzoom: 15,
			});
		}
		if (!map.getLayer("contours")) {
			map.addLayer({
				id: "contours",
				type: "line",
				source: "contourSourceFeet",
				"source-layer": "contours",
				paint: {
					"line-opacity": 0.5,
					"line-width": ["match", ["get", "level"], 1, 1, 0.5],
				},
			});
		}
		if (!map.getLayer("contour-text")) {
			map.addLayer({
				id: "contour-text",
				type: "symbol",
				source: "contourSourceFeet",
				"source-layer": "contours",
				filter: [">", ["get", "level"], 0],
				paint: {
					"text-halo-color": "white",
					"text-halo-width": 1,
				},
				layout: {
					"symbol-placement": "line",
					"text-size": 10,
					"text-field": ["concat", ["number-format", ["get", "ele"], {}], "'"],
					"text-font": ["Noto Sans Bold"],
				},
			});
		}

		// Forzar resize tras cargar el mapa para garantizar que se aplique el 100% de ancho
		setTimeout(() => {
			map.resize();
		}, 300);
	};

	// Al cambiar selectedRecord, volar a su ubicación
	useEffect(() => {
		if (selectedRecord && mapRef.current) {
			const map = mapRef.current.getMap();
			map.flyTo({
				center: [selectedRecord.lon, selectedRecord.lat],
				zoom: 12,
				speed: 1.3,
				curve: 1,
				easing: (t) => t,
				essential: true,
			});
		}
	}, [selectedRecord]);

	const handleMarkerClick = (record) => {
		selectRecord(record);
	};

	return (
		// Contenedor con altura y width fijos (width: "100%" se hereda del contenedor padre)
		<div style={{ height: "500px", width: "100%" }}>
			<ReactMapGL
				ref={mapRef}
				{...viewport}
				mapStyle='mapbox://styles/ikerluna/cm7b6ykln005d01s7fdffhda4'
				mapboxApiAccessToken={mapboxgl.accessToken}
				onLoad={handleMapLoad}
				onMove={(evt) => setViewport(evt.viewState)}
				onError={(error) => console.error("Mapbox error:", error)}
				interactive
			>
				<NavigationControl position='top-right' />
				{records.map((record) => (
					<Marker key={record.id} latitude={record.lat} longitude={record.lon}>
						<div
							onClick={() => handleMarkerClick(record)}
							style={{
								cursor: "pointer",
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<FaMapMarker size={30} color='magenta' />
							<span
								style={{
									position: "absolute",
									color: "white",
									fontWeight: "bold",
									fontSize: "0.5rem",
								}}
							>
								{record.id}
							</span>
						</div>
					</Marker>
				))}
				{selectedRecord && (
					<Popup
						className='custom-popup'
						latitude={selectedRecord.lat}
						longitude={selectedRecord.lon}
						closeButton
						closeOnClick={false}
						onClose={() => selectRecord(null)}
						offsetTop={-10}
					>
						<div>
							<div style={{ textAlign: "center", marginBottom: "10px" }}>
								<h3>{selectedRecord.id}</h3>
								<p>
									<strong>Recordist:</strong> {selectedRecord.recordist}
								</p>
								<p>
									<strong>Date:</strong> {selectedRecord.date}
								</p>
							</div>
							<audio controls style={{ width: "100%" }}>
								<source src={selectedRecord.audioFilePath} type='audio/mpeg' />
								Your browser does not support the audio element.
							</audio>
						</div>
					</Popup>
				)}
			</ReactMapGL>
		</div>
	);
};

export default MapEmbed;
