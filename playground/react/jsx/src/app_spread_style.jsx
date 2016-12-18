let React = require('react');
let ReactDOM = require('react-dom');

let myStyle = {
  fontStyle: 'normal',
  fontFamily: 'Courier',
  color: 'brown'
}

ReactDOM.render(
  <h2 style = {{...myStyle}}>
    Let's Spread!
  </h2>,
  document.querySelector('#myApp')
);
