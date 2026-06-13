import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout"; // Import our new Layout
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import ScrollToTopButton


// Lazy-loaded pages
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const FieldWorks = lazy(() => import("./pages/fieldworks"));
const FieldRecordings = lazy(() => import("./pages/fieldrecordings"));
const Resources = lazy(() => import("./pages/Resources"));

const AppRoutes = () => {
	const location = useLocation();

	return (
		<Routes location={location} key={location.pathname}>
			<Route path='/' element={<Home />} />
			<Route path='/fieldrecordings' element={<FieldRecordings />} />
			<Route path='/fieldworks' element={<FieldWorks />} />
			<Route path='/resources' element={<Resources />} />
			<Route path='/about' element={<About />} />
		</Routes>
	);
};

const App = () => {
	return (
		<div>
			<Suspense fallback={<div>Cargando aplicación...</div>}>
				{/* The Layout wraps the Routes so that only the active section expands */}
				<Layout>
					<AppRoutes />
					<ScrollToTopButton />
				</Layout>
			</Suspense>
		</div>
	);
};

export default App;
