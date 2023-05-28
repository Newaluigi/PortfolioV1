import React from "react";
import Navigation from "../components/Navigation";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <FaMapMarkerAlt />
              <span>Boulogne-sur-mer</span>
            </li>
            <li>
              <FaMobileAlt />
              <CopyToClipboard text="+33 6 61 17 24 87">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  +33 6 61 17 24 87
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <FaEnvelope />
              <CopyToClipboard text="alexandre.levilain@hotmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  alexandre.levilain@hotmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/alexandrelevillain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Newaluigi"
              target="_blank"
              rel="noopener noreferrer"
              className="contsocial"
            >
              <h4>Github</h4>
              <FaGithub />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
