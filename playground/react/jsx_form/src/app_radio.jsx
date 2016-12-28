let React = require('react');
let ReactDOM = require('react-dom');

let RadioButton = React.createClass({
  getInitialState: function() {
    return {selection: 'first'}
  },
  handleChange: function(event) {
    console.log(event.target.value);
    this.setState({selection: event.target.value});
  },
  render: function() {
    return (<div>どれか一つを選んでください：
        <div>
          <input
            type="radio"
            value="first"
            checked={this.state.selection == 'first'}
            onChange={this.handleChange}
            />最初の選択
        </div>
        <div>
          <input
            type="radio"
            value="second"
            checked={this.state.selection == 'second'}
            onChange={this.handleChange}
            />に番目の選択
        </div>
        <div>
          <input
            type="radio"
            value="third"
            checked={this.state.selection == 'third'}
            onChange={this.handleChange}
            />三番めの選択
        </div>
    </div>
  );
  }
});

ReactDOM.render(
  <RadioButton/>,
  document.querySelector('#myApp')
);
