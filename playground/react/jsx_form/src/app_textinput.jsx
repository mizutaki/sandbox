let React = require('react');
let ReactDOM = require('react-dom');

let TextInput = React.createClass({
  getInitialState: function() {
    return { dispText: '入力値'};
  },
  handleInput: function(event) {
    this.setState({dispText: event.target.value});
    console.log(this.state.dispText);
  },
  render: function() {
    return (
      <div>JSX InputText
        <input
          type="text"
          value={this.state.dispText}
          onChange={this.handleInput}
        />
    </div>);
  }
});

ReactDOM.render(
  <TextInput/>,
  document.querySelector('#myApp')
);
