import React from "react";
import "./StationListItem.css";

const StationListItem = props => {
  return (
    <div className="Station">
      {/* Render content when station is active */}
      {props.isActive ? (
        <div className="station-active">
          <button className="btn-vol-down" />
          <div onClick={props.onClick}>
            <img
              className="station-img"
              src={props.station.stationImage}
              alt=""
            />
          </div>
          <button className="btn-vol-up" />
        </div>
      ) : null}
      {/* Always visible content */}
      <div className="station-name" onClick={props.onClick}>
        <h2>{props.station.stationName}</h2>
        <h3>{props.station.frequency}</h3>
      </div>
    </div>
  );
};
export default StationListItem;
