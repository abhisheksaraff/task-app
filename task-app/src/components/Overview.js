import React, { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.tasks.map((task) => {
            return (<li key = {uniqid()}> {task}</li>);
        })}
        </ul>
      </div>
    );
  }
}

export default Overview;
