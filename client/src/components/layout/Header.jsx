import React from "react";

import RouterLink from "../ui/RouterLink";

const Header = () => {
	return (
		<div className="bg-blue-900 space-x-5 px-2 py-4">
			<RouterLink linkText="Home" to="/" />
			<RouterLink linkText="Social" to="/social" />
		</div>
	);
};

export default Header;
