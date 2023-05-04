import React from "react";

import RouterLink from "../ui/RouterLink";

const Header = () => {
	return (
		<div className="bg-blue-900 flex justify-center items-center px-2 py-4">
			<div className="space-x-5">
				<RouterLink linkText="Home" to="/" />
				<RouterLink linkText="Social" to="/social" />
			</div>
		</div>
	);
};

export default Header;
