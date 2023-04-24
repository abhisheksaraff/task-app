import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.value}
                <button onClick={() => this.props.editTask(task.id)}>Edit</button>
                <button onClick={() => this.props.removeTask(task.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
