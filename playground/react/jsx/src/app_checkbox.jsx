var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
    {/* コメント */}
    <p><input type="checkbox" checked/>JSX Check1</p>
    <p><input type="checkbox" checked={true}/>JSX Check2</p>
    <p><input type="checkbox" checked={false}/>JSX Check3</p>
  </div>,
  document.querySelector('#myApp')
)
