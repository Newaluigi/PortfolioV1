import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "Fun stuff" },
      { id: 2, value: "Clients" },
      { id: 3, value: "Team projects" },
      { id: 4, value: "Hackathon" },
    ],
    selectedRadio: "Fun stuff",
    isMobile: false,
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  updateIsMobile = () => {
    this.setState({ isMobile: window.innerWidth <= 520 });
  };

  componentDidMount() {
    this.updateIsMobile();
    window.addEventListener("resize", this.updateIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsMobile);
  }

  render() {
    let { projects, radios, selectedRadio, isMobile } = this.state;

    return (
      <div className="portfolioContent">
        {!isMobile && (
          <ul className="radioDisplay">
            {radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <input
                    type="radio"
                    name="radio"
                    checked={radio.value === selectedRadio}
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleRadio}
                  />
                  <label htmlFor={radio.value}>{radio.value}</label>
                </li>
              );
            })}
          </ul>
        )}
        <div className="projects">
          {projects
            .filter(
              (item) => item.languages.includes(selectedRadio) || isMobile
            )
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
