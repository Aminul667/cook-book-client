import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:mx-9 my-6">
      <div className="navbar py-5 border-y-2 border-lime-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <h2 className="font-semibold text-5xl font-montez">
            <span>Cook</span>
            <span className="text-lime-600">Book</span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "black",
                        borderBottom: "3px solid rgb(77 124 15)",
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "black",
                        borderBottom: "3px solid rgb(77 124 15)",
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                Blog
              </NavLink>
            </li>
            {/*  */}
            {!user ? (
              <li>
                <NavLink
                  to="login"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "black",
                          borderBottom: "3px solid rgb(77 124 15)",
                          backgroundColor: "transparent",
                        }
                      : {}
                  }
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
            {/*  */}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={user.photoURL} title={user.displayName} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
