'use strict'
let React = require('react')
let ReactDOM = require('react-dom')

function taskListRender(data) {
  let TaskBox = React.createClass({
  render: function() {
      return (
        <div className="taskBox">
          <h1>RedmineTaskList</h1>
          <TaskList data={this.props.data} />
        </div>
      );
    }
  });
  let TaskList = React.createClass({
    render: function() {
      let taskNodes = this.props.data.map(function (task) {
        return (
          <li className="first">
            <Task id={task.id}>aaa</Task>
            <Task status={task.status.name}>aaa</Task>
            <Task subject={task.subject}>aaa</Task>
          </li>
        );
      });
      return (
        <ul className="list">
            {taskNodes}
        </ul>
      );
    }
  });
  let Task = React.createClass({
    render: function() {
      return (
        <span className="dan">
          {this.props.id}
          {this.props.status}
          {this.props.subject}
        </span> 
      );
    }
  });
  ReactDOM.render(
    <TaskBox data={data} />,
    document.getElementById('content')
  );
}