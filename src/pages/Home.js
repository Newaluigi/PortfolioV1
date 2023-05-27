import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Alexandre Levillain</h1>
          <h2>Full Stack Developer</h2>
          <div className="pdf">
            <a href="/public/media/cv.pdf" targe="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
