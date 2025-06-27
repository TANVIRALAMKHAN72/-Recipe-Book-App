import React, { useContext, useState, useRef, useEffect } from "react";
import logo from "../assets/png-clipart-recipe-cooking-chef-dish-food-cooking-food-recipe-thumbnail-modified.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider.jsx";

const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef();
  const profileDropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <div className="navbar-start">
          <div
            className={`dropdown ${dropdownOpen ? "dropdown-open" : ""}`}
            ref={dropdownRef}
          >
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              onClick={() => setDropdownOpen(false)}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline border-b-2 border-blue-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-recipes"
                  className={({ isActive }) =>
                    isActive ? "underline border-b-2 border-blue-500" : ""
                  }
                >
                  All Recipes
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                to="/add-recipes"
                className={({ isActive }) =>
                  isActive ? 'underline border-b-2 border-blue-500' : ''
                }
              >
                Add Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-recipes"
                className={({ isActive }) =>
                  isActive ? 'underline border-b-2 border-blue-500' : ''
                }
              >
                My Recipes
              </NavLink>
            </li> */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "underline border-b-2 border-blue-500" : ""
                  }
                >
                  DashBoard
                </NavLink>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="flex items-center ml-5 text-xl gap-2 font-bold"
          >
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            Recipe-Book
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline border-b-2 border-blue-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-recipes"
                className={({ isActive }) =>
                  isActive ? "underline border-b-2 border-blue-500" : ""
                }
              >
                All Recipes
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/add-recipes"
                className={({ isActive }) =>
                  isActive ? 'underline border-b-2 border-blue-500' : ''
                }
              >
                Add Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-recipes"
                className={({ isActive }) =>
                  isActive ? 'underline border-b-2 border-blue-500' : ''
                }
              >
                My Recipes
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "underline border-b-2 border-blue-500" : ""
                }
              >
                DashBoard
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3 mr-5">
          {user?.email ? (
            <div className="relative" ref={profileDropdownRef}>
              <div
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="cursor-pointer flex items-center gap-2"
                title={user.displayName || "User"}
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-lg">
                    {user.displayName ? user.displayName[0].toUpperCase() : "T"}
                  </div>
                )}
              </div>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                  <div className="px-6 py-2 text-gray-800 border-b border-gray-200">
                    {user.displayName || "User"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary px-6">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
