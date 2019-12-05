import React from 'react';
import './TopBar.css';

const TopBar = () => {

    return (
        <div className="TopBar"> 
            <div className="container nav">
                <button className="btn-back" />
                <h1>Stations</h1>
                <button className="btn-switch" />
            </div>
        </div>
    )
};
export default TopBar;