import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <FaCheckSquare className="listIcon" />
            Git
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            Figma
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            MySQL
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            Scrum
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            Unity
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            Photoshop
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            CSS & SCSS
          </li>
          <li>
            <FaCheckSquare className="listIcon" />
            Wordpress
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
