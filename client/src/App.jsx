import Register from "./components/pages/Register.jsx";
import Home from "./components/pages/Home.jsx";
import Social from "./components/pages/Social.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/layout/Header";

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/social" element={<Social />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
