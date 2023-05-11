import React from "react";
import { useLogout } from "../../hooks/useLogout.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext.js";

import RouterLink from "../ui/RouterLink.jsx";

import styles from "./header.module.css";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="bg-blue-900 flex justify-center items-center px-2 py-4">
      <div className="space-x-5">
        <RouterLink linkText="Home" to="/" />
        {/* <RouterLink linkText="Social" to="/social" /> */}
      </div>
      <nav >
        {user && (
          <div>
            <span>{user.username}</span>
            <button className={styles["logout"]} onClick={handleClick}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className={styles['authButtons-container']}>
            <Link className={styles['authButtons']} to="/login">Login</Link>
            <Link className={styles['authButtons']} to="/register">Register</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
