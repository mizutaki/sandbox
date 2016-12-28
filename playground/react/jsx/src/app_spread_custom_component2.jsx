let React = require('react');
let ReactDOM = require('react-dom');

let ColoredButton = React.createClass({
  render: function() {
    var defAttrs = {
      style: {
        color: '#A04020',
        backgroundColor: '#90C0A0',
        fontFamily: 'Serif',
        fontSize: 22
      },
      type: 'button',
      disabled: false
    }
    return (
      <button {...defAttrs}{...this.props}/>
    )
  }
});

ReactDOM.render(
  <ColoredButton disabled = {true}>
    Tap me!
  </ColoredButton>,
  document.querySelector('#myApp')
);
