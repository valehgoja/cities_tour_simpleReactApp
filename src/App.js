import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import TourList from "./components/TourList/TourList.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList/>
      </React.Fragment>
    );
  }
}

export default App;
