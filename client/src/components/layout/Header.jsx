import React from "react";

import RouterLink from "../ui/RouterLink";
import SearchBar from "../ui/SearchBar";

const Header = () => {
	return (
		<div className="bg-blue-900 flex justify-between items-center px-2 py-4">
			<div className="space-x-5">
				<RouterLink linkText="Home" to="/" />
				<RouterLink linkText="Social" to="/social" />
			</div>
			<SearchBar />
		</div>
	);
};

export default Header;
