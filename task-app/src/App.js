import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault(); //Prevents page refresh

    this.setState({
      tasks: [...this.state.tasks, e.target.taskname.value],
    });

    e.target.reset(); //resets the text field after submit
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label>
            Enter a new task : <input id="task-input" type="text" name="taskname" />
          </label>
          <button type="submit">Add Task</button>
        </form>

        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
