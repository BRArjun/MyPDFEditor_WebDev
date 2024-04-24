import React from "react";
import FileUpload from "./FileUpload";

import "./homepage.css";
import "./leftplant.svg";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <div className="homepage-container">
          <h1 className="title">Simpdf :: Minimal PDF editor</h1>
          <p>
            {" "}
            <b>Double click</b> the elements to edit, and save page as PDF
          </p>
          <br />
          <FileUpload />
        </div>
        <div className="plants">
          <div className="plant-left">
            <img
              height={"400px"}
              src="https://ozgrozer.github.io/hdt/objects/sceneHomePlant.svg"
            />
          </div>

          <div className="plant-center">
            We do not store any documents.{" "}
            <a href="https://github.com/shashanoid/Simpdf">Github</a>
          </div>

          <div className="plant-right">
            <img
              height={"400px"}
              src="https://ozgrozer.github.io/hdt/objects/scenePlantPlantLeft.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}
