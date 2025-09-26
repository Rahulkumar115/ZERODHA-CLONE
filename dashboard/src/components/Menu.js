import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
  axios.get("http://localhost:3002/api/auth/check",
    { withCredentials: true})
      .then((res) => {
        if(res.data.valid){
          setUsername(res.data.user?.name || "");
        }
      }).catch(() => {
        setUsername("");
      });
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/api/auth/logout", {}, { withCredentials: true });
      window.location.href = "http://localhost:3000"; // Redirect to landing page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} ref={dropdownRef} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar">{username ? username[0].toUpperCase() : "U"}</div>
          <p className="username">{username || "USERNAME"}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown" style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              right: 0,
              background: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              zIndex: 1000,
              width: "150px",
            }}>
              {/* Dropdown items */}
              <div className="dropdown-item" style={{ padding: "10px", cursor: "pointer" }}>
                Profile
              </div>
              <div className="dropdown-item" style={{ padding: "10px", cursor: "pointer" }}>
                Settings
              </div>
              <div className="dropdown-item" style={{ padding: "10px", cursor: "pointer" }} onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;