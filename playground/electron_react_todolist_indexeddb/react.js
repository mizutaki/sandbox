var React = require('react');
var ReactDOM = require('react-dom');
var HogeApp = require('./views/hogeapp.jsx');

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
   <HogeApp/>,
   document.querySelector('#reactArea')
  );
});
