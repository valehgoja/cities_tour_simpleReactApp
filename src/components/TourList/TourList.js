import React, { Component } from "react";
import Tour from "../Tour/Tour.js";
import { tourData } from "../../../src/tourData.js";
import "./TourList.scss";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => {
     return tour.id != id;
    });
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourList">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
