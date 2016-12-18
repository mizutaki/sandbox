var React = require('react');
var ReactDOM = require('react-dom');

var RandomColor = React.createClass({
  render: function() {
    return (
      <h2 style={{color:
          this.props.value >= 0 ? 'green' : 'red'
        }}>
        The number is {this.props.value}
      </h2>
    );
  }
});

ReactDOM.render(
  <RandomColor value={Math.floor(Math.random() * 20) - 10} />,
  document.getElementById('myApp')
);
