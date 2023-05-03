import Register from "./components/pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Social from "./components/pages/Social.jsx";
import Map from "./components/Map.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import RouterLink from "./components/ui/RouterLink.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<div className="bg-blue-900 space-x-10 px-2 py-4">
				<RouterLink linkText="Home" to="/" />
				<RouterLink linkText="Social" to="/social" />
			</div>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/social" element={<Social />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
