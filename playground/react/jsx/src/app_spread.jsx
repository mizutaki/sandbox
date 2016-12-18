let React = require('react');
let ReactDOM = require('react-dom');

let myAttributes = {
  type: 'radio',
  checked: true,
  readOnly: true,
  disabled: true,
  size: 8
}

ReactDOM.render(
  <p><input {...myAttributes}/>Chceck me!</p>,
  document.querySelector('#myApp')
);
