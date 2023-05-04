import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ linkText, to }) => {
	return (
		<Link
			to={to}
			className="text-white font-semibold px-4 py-2 hover:scale-105 duration-200 hover:text-orange-300"
		>
			{linkText}
		</Link>
	);
};

export default RouterLink;
