import React, { Component } from "react";

export class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: props.data
    };
  }

  componentDidMount() {
    fetch(`http://localhost:9988${this.state.vehicle.url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ vehicle: Object.assign(this.state.vehicle, data) });
      });
  }

  render() {
    return (
      <div className="c-vehicle">
        <img
          className="c-vehicle__image"
          src={`http://localhost:9988${this.state.vehicle.media[0].url}`}
          alt="Vehicle"
        />
        <h2 className="c-vehicle__title">{this.state.vehicle.id}</h2>
        <h3 className="c-vehicle__price">From {this.state.vehicle.price}</h3>
        <p className="c-vehicle__description">
          {this.state.vehicle.description}
        </p>
      </div>
    );
  }
}
