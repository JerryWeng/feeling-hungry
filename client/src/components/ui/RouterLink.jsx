import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ linkText, to }) => {
	return (
		<Link to={to} className="bg-black text-white px-4 py-2 rounded-md">
			{linkText}
		</Link>
	);
};

export default RouterLink;
