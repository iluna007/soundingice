import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Actualiza el estado para que el siguiente render muestre el fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// Puedes registrar el error en un servicio de logueo
		console.error("ErrorBoundary caught an error", error, info);
	}

	render() {
		if (this.state.hasError) {
			// Puedes renderizar cualquier UI de respaldo
			return <h2>Something went wrong.</h2>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
