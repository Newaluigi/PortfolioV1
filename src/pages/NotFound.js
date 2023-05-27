import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas</h3>
        <NavLink exact to="/" className="navActive">
          <FaHome className="icon" />
          <span> Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
