import React from "react";
import "./BottomBar.css";

const BottomBar = props => {
  return (
    <div className="BottomBar">
      {props.activeStation ? (
        <div className="container">
          <h4>Currently Playing</h4>
          <h2>{props.activeStation.stationName}</h2>
        </div>
      ) : null}
    </div>
  );
};
export default BottomBar;
