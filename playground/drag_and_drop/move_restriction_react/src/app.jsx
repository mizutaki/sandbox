var React = require('react');
var ReactDOM = require('react-dom');

var DivContainer = React.createClass({
    render: function() {
        return (
            <div className="container">
                <DivDropArea divId="area1" buttonId="area1Button1"/>
                <DivDropArea divId="area2" buttonId="area1Button2"/>
                <DivDropArea divId="area3" buttonId="area1Button3"/>
            </div>
        );
    }
});
var DivDropArea = React.createClass({
    render: function() {
        return (
            <div id={this.props.divId}>
                <input id={this.props.buttonId} className="button" type="button" value="作成"/>
            </div>
        );
    }
});

ReactDOM.render(
    <DivContainer/>, document.querySelector('#myApp'));
