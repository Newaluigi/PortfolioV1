import React, { Component } from "react";
import { FaCode, FaPlusCircle } from "react-icons/fa";

class Project extends Component {
  state = { showInfo: false };
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  //   handleExit = () => {
  //     this.setState({ showInfo: !this.state.showInfo });
  //   };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon, index) => (
            <span key={index} className="icon">
              {icon}
            </span>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="project" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <FaPlusCircle className="plusIcon" />
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Code source <FaCode />
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
