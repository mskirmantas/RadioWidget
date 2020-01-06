import React, { Component } from "react";
import "./RadioWidget.css";
import TopBar from "./TopBar/TopBar";
import StationList from "./StationList/StationList";
import BottomBar from "./BottomBar/BottomBar";

import Putin from "../assets/images/Putin.jpg";
import Dribbble from "../assets/images/Dribbble.jpg";
import Doge from "../assets/images/Doge.jpg";
import Ballads from "../assets/images/Ballads.jpg";
import Maximum from "../assets/images/Maximum.jpg";

const stations = [
  {
    id: "Putin",
    stationName: "Putin FM",
    frequency: "66,6",
    stationImage: Putin
  },
  {
    id: "Dribbble",
    stationName: "Dribbble FM",
    frequency: "101,2",
    stationImage: Dribbble
  },
  { id: "Doge", stationName: "Doge FM", frequency: "99,4", stationImage: Doge },
  {
    id: "Ballads",
    stationName: "Ballads FM",
    frequency: "87,1",
    stationImage: Ballads
  },
  {
    id: "Maximum",
    stationName: "Maximum FM",
    frequency: "142,2",
    stationImage: Maximum
  }
];

class RadioWidget extends Component {
  state = {
    activeStationID: undefined
  };

  toggleActiveStation = stationID => {
    this.setState({ activeStationID: stationID });
    if (this.state.activeStationID === stationID) {
      this.setState({ activeStationID: undefined });
    }
  };

  // Find clicked-on station to show in BottomBar
  get activeStation() {
    return stations.find(station => station.id === this.state.activeStationID);
  }

  render() {
    return (
      <div className="RadioWidget">
        <TopBar />
        <StationList
          stations={stations}
          activeStationID={this.state.activeStationID}
          onStationClick={this.toggleActiveStation}
        />
        <BottomBar activeStation={this.activeStation} />
      </div>
    );
  }
}
export default RadioWidget;
