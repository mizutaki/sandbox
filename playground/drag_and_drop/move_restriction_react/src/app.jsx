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
    getInitialState() {
      console.log(area1);
      return {
        area1: area1,
        area2: area2,
        area3: area3
      }
    }
    ,
    onCreateTextArea(buttonId) {
      let counter = ls.getItem("elementCounter");
      if (counter === null) {
          ls.setItem("elementCounter", 0);
      }
      ls.setItem("elementCounter", Number.parseInt(ls.getItem("elementCounter")) + 1);
      console.log(buttonId);
      this._changeState(buttonId);
    },
    _changeState(buttonId) {
      if (buttonId === "area1Button") {
        this.setState({
          area1: this.state.area1.concat({id:ls.getItem("elementCounter"), parentId:"area1", value:"追加"}),
        });
      } else if (buttonId === "area2Button") {
        this.setState({
          area2: this.state.area2.concat({id:ls.getItem("elementCounter"), parentId:"area2", value:"追加"})
        });
      } else if (buttonId === "area3Button") {
        this.setState({
          area3: this.state.area3.concat({id:ls.getItem("elementCounter"), parentId:"area3", value:"追加"})
        });
      }
    },
    render: function() {
      return (
          <div className="container">
              <DivDropArea divId="area1" buttonId="area1Button" childElementList={this.state.area1} onCreateTextArea={this.onCreateTextArea}/>
              <DivDropArea divId="area2" buttonId="area2Button" childElementList={this.state.area2} onCreateTextArea={this.onCreateTextArea}/>
              <DivDropArea divId="area3" buttonId="area3Button" childElementList={this.state.area3} onCreateTextArea={this.onCreateTextArea}/>
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
        <CreateButton buttonId={this.props.buttonId} onCreateTextArea={this.props.onCreateTextArea}/>
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
  _onCreateTextArea(e) {
    this.props.onCreateTextArea(this.props.buttonId);
  },
  render: function() {
    return(
      <input id={this.props.buttonId} className="button" type="button" value="作成" onClick={this._onCreateTextArea}/>
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
      <textarea id={this.props.id} value={this.state.value} draggable="true" onChange={this.onChangeText}/>
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
