import React, { Component } from "react";
import ProgressBar from "./ProgessBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 4, value: "TypeScript", xp: 0.7 },
      { id: 3, value: "Java", xp: 0.4 },
      // { id: 2, value: "Html", xp: 2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.8 },
      { id: 2, value: "Angular", xp: 0.7 },
      { id: 3, value: "NodeJS", xp: 1.8 },
      { id: 4, value: "Express", xp: 1.5 },
      { id: 5, value: "Spring", xp: 0.4 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
