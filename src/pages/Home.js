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

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="overlay" style={overlayStyle}></div>
        <div className="content">
          <h1>Alexandre Levillain</h1>
          <h2>Full Stack Developer</h2>
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
