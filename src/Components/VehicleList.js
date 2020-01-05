import React, { Component } from "react";
import { Vehicle } from "./Vehicle";

export class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:9988/api/vehicle")
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    if (this.state.data) {
      return (
        <div className="c-vehicle-list">
          {this.state.data.vehicles.map(data => (
            <Vehicle data={data} />
          ))}
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
