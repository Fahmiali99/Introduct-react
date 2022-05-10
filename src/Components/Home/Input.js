import React, { Component } from "react";
import List from "./List ";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  render() {
    return (
      <div className=" m-12">
        <form onSubmit={this.handleSubmit} className="flex">
          <div className="w-full mr-4">
            <input
              className="shadow border rounded w-full py-2 px-3 text-grey-darker  "
              placeholder="Username"
              value={this.state.todoItem}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button class=" bg-indigo-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded ">
              Add
            </button>
          </div>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default Input;
