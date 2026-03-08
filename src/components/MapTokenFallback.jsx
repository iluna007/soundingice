const MapTokenFallback = () => (
	<div
		className='map-embed-inner'
		style={{
			width: "100%",
			height: "100%",
			minHeight: "400px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "#f0f0f0",
			borderRadius: "8px",
			color: "#666",
			textAlign: "center",
			padding: "1rem",
		}}
	>
		<div>
			<p style={{ marginBottom: "0.5rem" }}>
				<strong>Mapa no disponible</strong>
			</p>
			<p style={{ fontSize: "0.9rem" }}>
				Crea un archivo <code>.env</code> en la raíz del proyecto con:
			</p>
			<code style={{ display: "block", marginTop: "0.5rem", fontSize: "0.85rem" }}>
				VITE_MAPBOX_TOKEN=pk.eyJ1...
			</code>
			<p style={{ marginTop: "0.75rem", fontSize: "0.85rem" }}>
				Obtén un token en{" "}
				<a href='https://account.mapbox.com/' target='_blank' rel='noreferrer'>
					account.mapbox.com
				</a>
			</p>
		</div>
	</div>
);

export default MapTokenFallback;
