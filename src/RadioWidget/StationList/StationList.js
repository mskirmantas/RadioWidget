import React from 'react';
import './StationList.css';
import StationListItem from './StationListItem/StationListItem';

const StationList = (props) => {
    return (
        <div className="StationList">
            <div className="container">
                {/* Loop to get stations */}
                {props.stations.map(station => {
                    return (
                        <StationListItem
                            key={station.id}
                            station={station}
                            isActive={station.id === props.activeStationID}
                            onClick={() => props.onStationClick(station.id)}
                        />
                    )
                })}
            </div>
        </div>
    )
  }
  export default StationList;