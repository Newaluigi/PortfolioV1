import React from "react";
import profilePic from "../assets/image.jpg";
import { NavLink } from "react-router-dom";
import {
  FaAddressCard,
  FaAward,
  FaGithub,
  FaHome,
  FaImages,
  FaLinkedin,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={profilePic} alt="profile-pic" />
          <h3>Alexandre Levillain</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" className="navActive">
              <FaHome className="icon" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" className="navActive">
              <FaAward className="icon" />
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" className="navActive">
              <FaImages className="icon" />
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="navActive">
              <FaAddressCard className="icon" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li className="social">
            <a
              href="https://www.linkedin.com/in/alexandrelevillain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Newaluigi"
              target="_blank"
              rel="noopener noreferrer"
              className="contsocial"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Newaluigi - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;