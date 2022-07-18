import React from "react";
import "../styles/navigation.css";
import zoee from "../assets/images/logos.svg";
import notifications from "../assets/images/notifications.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = ({ inital }) => {
  let location = useLocation();

  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <img src={zoee} alt="" />
        <div className="nav-items">
          <Link to="/" className={location.pathname == "/" ? "route" : ""}>
            Home
          </Link>
          <Link
            to="/contacts"
            className={location.pathname == "/contacts" ? "route" : ""}
          >
            Contacts
          </Link>
        </div>
        <div className="nav-right">
          <img src={notifications} alt="notifications" />
          <p className="inital">{inital}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
