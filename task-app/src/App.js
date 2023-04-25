import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addItem.bind(this);
    this.editTask = this.editItem.bind(this);
    this.removeTask = this.removeItem.bind(this);
  }

  addItem(event) {
    event.preventDefault(); //prevents page refresh

    console.log(event.target);

    this.setState({
      tasks: [
        ...this.state.tasks,
        { value: event.target.value, id: uniqid() }, //new object that is added to the end of the list
      ],
    });

    event.target.reset(); //resets the text field after submit
  }

  editItem(id) {
    let index;

    //finds the item that needs to be edited
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id === id) index = i;
    }

    let editedTask = prompt("Enter your edited task", this.state.tasks[index].value);

    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index), //returns a portion of array before intended item
        {value: editedTask, id: id}, //edited task to be added with the same id
        ...this.state.tasks.slice(index + 1), //returns a portion of array after intended item
      ],
    });
  }

  removeItem(id) {
    let index;

    //finds the item that needs to be deleted by it's id
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id === id) index = i;
    }

    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index), //returns a portion of array before intended item
        ...this.state.tasks.slice(index + 1), //returns a portion of array after intended item
      ],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label>
            Enter a new task
            <input type="text" />
          </label>
          <button type="submit">Add Task</button>
        </form>

        <Overview tasks={this.state.tasks} editTask={this.editTask} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
