import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Route, useHistory } from "react-router-dom";
import { sideMenuItems } from "./sideMenuItems";
import "./Menu.css";
import * as IoIcons from "react-icons/io";

function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  console.log("HISTORY", history);
  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-itmes" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillCloseSquare />
            </Link>
          </li>
          {sideMenuItems.map((ting, index) => {
            return (
              <li key={index} className={ting.className}>
                <Link to={ting.url}>
                  {ting.icon}
                  <span>{ting.name}</span>
                </Link>
              </li>
            );
          })}
          <li onClick={handleLogout} className="nav-text-login">
            <Link>
              <FaIcons.FaSadTear />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
