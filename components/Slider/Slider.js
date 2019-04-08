// A simple slider that displays content on the screen //
// Req - Image, Title, Description
import Siema from "siema";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Slider extends React.Component {
  // State if needed
  state = {};

  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };

  componentDidMount() {
    this.siema = new Siema({
      selector: ".siema",
      duration: 200,
      easing: "ease-out",
      perPage: 3,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      onInit: () => {},
      onChange: () => {}
    });
  }

  render() {
    return (
      <div>
        <div class="siema">
          <div>Hi, I'm slide 1</div>
          <div>Hi, I'm slide 2</div>
          <div>Hi, I'm slide 3</div>
          <div>Hi, I'm slide 4</div>
        </div>
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

Slider.defaultPropTypes = {
  slideArray: PropTypes.array.isRequired
}