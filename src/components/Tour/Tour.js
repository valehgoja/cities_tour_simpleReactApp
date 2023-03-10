import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
    state =
    {
        showInfo:false
    }
    show = ()=>{
        this.setState({
            showInfo :!this.state.showInfo
        })
    }
  render() {
    const { id, city, img, name, info } = this.props.tour;
    
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={()=>{removeTour(id)}}>
            <i className="fa-solid fa-rectangle-xmark" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
         <h5>
         Info
          <span onClick={this.show}>
            <i class="fa-solid fa-square-caret-down"></i>
          </span>
         </h5>
         {this.state.showInfo ? <p>{info}</p> : <p></p>}
         
        </div>
      </article>
    );
  }
}
