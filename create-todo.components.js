import React, { Component } from "react";
//import axios from 'axios';

export default class CreateToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
    this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
    this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this);
    this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeToDoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeToDoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeToDoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    const newToDo = {
        todo_description: this.state.todo_description,
        todo_responsible: this.state.todo_responsible,
        todo_priority: this.state.todo_priority,
        todo_completed: this.state.todo_completed,
    }


    axios.post('http://localhost:4000/todos/add', newToDo)
    .then(res => {
        console.log(res.data);
    });
    this.setState = {
        todo_description: "",
        todo_responsible: "",
        todo_priority: "",
        todo_completed: false
      };
    }
  
    render() {
      return (
        <div style={{ marginTop: 20 }}>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="description">Description: </label>
              <input
                value={this.state.todo_description}
                onChange={this.onChangeToDoDescription}
                type="text"
                className="form-control"
                id="description"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
            <label htmlFor="description">Responsible: </label>
            <input
              value={this.state.todo_responsible}
              onChange={this.onChangeToDoResponsible}
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={this.state.todo_priority === 'Low'}
              onChange={this.onChangeToDoPriority}
            />
              <label className="form-check-label" htmlFor="priorityLow">
              Low
            </label>

            <br/>

            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={this.state.todo_priority === 'Medium'}
              onChange={this.onChangeToDoPriority}
            />
            <label className="form-check-label" htmlFor="priorityMedium">
              Medium
            </label>

            <br/>
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={this.state.todo_priority === 'High'}
              onChange={this.onChangeToDoPriority}
            />
            <label className="form-check-label" htmlFor="priorityHigh">
              High
            </label>

            <br />
            <button type="submit" onSubmit={this.onSubmit} className="btn btn-primary btn-sm">Save ToDo</button>            

</div>
</form>
</div>
);
}
}