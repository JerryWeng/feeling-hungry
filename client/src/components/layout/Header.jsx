import React from "react";
import { useLogout } from "../../hooks/useLogout.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.js";

import RouterLink from "../ui/RouterLink.jsx";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-blue-900 bg-opacity-50 flex justify-center items-center px-2 py-4">
      <div className="space-x-5 text-white">
        <RouterLink linkText="Home" to="/" />
        <RouterLink linkText="Social" to="/social" />
      </div>
      <nav className="ml-auto">
        {user && (
          <div className="text-white">
            <span>Welcome, {user.data.user.username}</span>
            <button
              className="ml-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded"
              onClick={handleClick}
            >
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className="text-white">
            <Link
              className="mr-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
