var Puid = require('puid')
var puid = new Puid('JS')
var myStorage = localStorage;

var arr = []
for (var i = 0; i < myStorage.length; i++) {
  //console.log(myStorage.key(i))
  //console.log(JSON.parse(myStorage.getItem(myStorage.key(i))))
  arr.push(JSON.parse(myStorage.getItem(myStorage.key(i))))
}
console.log(arr)
var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      todos: []
    }
  },

  componentDidMount : function() {
    this.setState({
      todos: arr
    })
  },

  onAdd: function(newTodo){
    this.setState({
      todos : this.state.todos.concat({item:newTodo, status:0})
    });
  },

  onDelete: function(i){
    var targetTodo = this.state.todos[i];
    targetTodo.status = 1;
    this.setState({
      todos: this.state.todos
    });
  },

  onClear: function() {
    this.setState({
      todos: []
    });
  },

  render: function(){
    return (
      <div className="TodoApp">
        <TodoCreator onAdd={this.onAdd} onClear={this.onClear}/>
        <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
      </div>
    );
  }
});

var TodoCreator = React.createClass({
  getInitialState: function(){
    return {
      value: ""
    }
  },

  _onAdd: function(){
    var newTodo = this.refs.inputText.getDOMNode().value;
    this.props.onAdd(newTodo);
    myStorage.setItem(puid.generate(), JSON.stringify({item : newTodo, status: 0}));
    this.setState({value: ""});
  },

  _onChange: function(e){
    this.setState({
      value: e.target.value
    });
  },

  _onClear: function() {
    myStorage.clear();
    this.props.onClear();
  },

  render: function(){
    return (
      <div className="TodoCreator">
        <input type="text" value={this.state.value} ref="inputText" placeholder="Input your new todo" onChange={this._onChange}/>
        <button onClick={this._onAdd}>Add</button>
        <button onClick={this._onClear}>Clear</button>
      </div>
    );
  }
});

var TodoList = React.createClass({

  _onDelete: function(i){
    this.props.onDelete(i);
  },
  
  render: function() {
    return (
      <ul>
        {
          this.props.todos.map(function(todo,i){
            if (todo.status == 0) { 
              return (
                <li key={i}>
                  <input type="checkbox"
                          onClick={this._onDelete.bind(this,i )}/>{todo.item}
                </li>
              )
            } else {
              return <li key={i}><s>{todo.item}</s></li>
            }
          },this)
        }
      </ul>
    );
  }
});

React.render(
  <TodoApp/>,
  document.getElementById('myApp')
);