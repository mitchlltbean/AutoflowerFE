import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar";

export default class sideMenu extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {/* // TODO have onclick render component for each item  */}
        {/* // TODO link this to components that will hold the information from the database, perhaps rope it in with the active Page state  */}
        {/* // TODO create event listoners for each tab so that it renders the right information when selected */}
        {/* // TODO probably want to switch between segments to correspond with the menu */}
        {/* // TODO possible dropdown with Help/Contact/FAQ type of deal */}
      </div>
    );
  }
}

//TODO -1 increase the height of the menu and attached segment
//TODO -2
