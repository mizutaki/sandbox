var React = require('react');
var ReactDOM = require('react-dom');

let ls = localStorage;
let data = "";
let area1 = [];
let area2 = [];
let area3 = [];
Object.keys(ls).forEach(function(key) {
    if ("elementCounter" === key)
        return;
    let item = ls.getItem(key);
    if ("area1" === key) {
      console.log("area1");
      area1 = JSON.parse(item);
    } else if ("area2" === key) {
      console.log("area2");
      area2 = JSON.parse(item);
    } else if ("area3" === key) {
      console.log("area3");
      area3 = JSON.parse(item);
    }
    console.log(data);
    //data.forEach(function(obj) {
    //let textarea = document.createElement("textarea");
    //textarea.id = obj.id;
    //textarea.value = obj.value;
    //textarea.setAttribute("draggable", "true");
    //textarea.setAttribute("rows", "3");
    //let parent = obj.parentNode;
    //let parentNode = document.getElementById(parent);
    //parentNode.appendChild(textarea);
    //addDragEvent();
    //});

});
console.log(area1);
console.log(area2);
console.log(area3);
var DivContainer = React.createClass({
    render: function() {
        return (
            <div className="container">
                <DivDropArea divId="area1" buttonId="area1Button1" childElementList={area1}/>
                <DivDropArea divId="area2" buttonId="area1Button2" childElementList={area2}/>
                <DivDropArea divId="area3" buttonId="area1Button3" childElementList={area3}/>
            </div>
        );
    }
});
var DivDropArea = React.createClass({
  render: function() {
    var textarea = this.props.childElementList.map(function(child){
      return <TextArea id={child.id} parentId={child.parentId} value={child.value} />
    });
    return(
      <div id={this.props.divId}>
        <CreateButton buttonId={this.props.buttonId}/>
        {textarea}
      </div>
    );
  }
});

var CreateButton = React.createClass({
  getInitialState() {
    return {
      area: area1
    };
  },
  onCreateTextArea(e) {
    this.setState({
      area1: this.state.area.concat({id:111, parentId:"area1", value:"追加"})
    });
  },
  render: function() {
    return(
      <input id={this.props.buttonId} className="button" type="button" value="作成" onClick={this.onCreateTextArea}/>
    )
  }
});

var TextArea = React.createClass({
  getInitialState() {
    return {
      value: "initial value"
    };
  },
  onChangeText(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return(
      <textarea id={this.props.id} value={this.state.value} onChange={this.onChangeText}/>
    )
  }
});
/*
var TextArea = React.createClass({
    render() {
        return (
            <textate id={this.props.id}>{this.props.parentId}{this.props.value}</textate>
        );
    }
});
let ls = localStorage;
let data = "";
Object.keys(ls).forEach(function(key) {
    if ("elementCounter" === key)
        return;
    let item = ls.getItem(key);
    console.log(item);
    data = JSON.parse(item);
    console.log(data);
    //data.forEach(function(obj) {
    //let textarea = document.createElement("textarea");
    //textarea.id = obj.id;
    //textarea.value = obj.value;
    //textarea.setAttribute("draggable", "true");
    //textarea.setAttribute("rows", "3");
    //let parent = obj.parentNode;
    //let parentNode = document.getElementById(parent);
    //parentNode.appendChild(textarea);
    //addDragEvent();
    //});
    console.log(data);
});
var aaa = data;
console.log(aaa);
var DivDropArea = React.createClass({
    getInitialState() {
        return {
          users: [{id:1, parentId: "are1", value: "aaa"},{id:2, parentId: "are1", value: "vvv"}, {id:4, parentId: "are2", value: "cc"}]
        }
    },
    render: function() {
        var ba = this.state.users.map(function(user){
          return <TextArea id = {user.id} parentId={user.parentId} value = {user.value} />
        });
        console.log("ba:" + ba);
        return (
            <div id={this.props.divId}>
                <input id={this.props.buttonId} className="button" type="button" value="作成"/>
                {ba}
            </div>
        );
    }
});
*/
ReactDOM.render(
    <DivContainer/>, document.querySelector('#myApp'));
