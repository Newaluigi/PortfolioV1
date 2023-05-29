import React from "react";
import Navigation from "../components/Navigation";
import CV from "../assets/cv.pdf";
import backgroundImage from "../assets/computer.png";

const Home = () => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(115deg, $color-1, 50%, transparent 100%)",
    zIndex: 0,
  };

  const svgCode = (
    <svg width="100%" height="100%" version="1.1">
      <path id="path">
        <animate
          attributeName="d"
          from="m0,110 h0"
          to="m0,110 h1100"
          dur="4s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <text style={{ maxWidth: "100%", fill: "rgb(99, 164, 233)" }}>
        <textPath href="#path">Développeur full stack</textPath>
      </text>
    </svg>
  );

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="overlay" style={overlayStyle}></div>
        <div className="content">
          <h1>Alexandre Levillain</h1>
          <h2>{svgCode}</h2>
          <div className="pdf">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              Télécharger CV
            </a>
          </div>
        </div>
        <div
          className="backgroundImage"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
