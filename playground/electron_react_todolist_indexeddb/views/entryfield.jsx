var React = require('react');

var EntryField = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    }
  },

  _onAdd: function() {
    var newContent = this._input.value;
    this.props.onAdd(newContent);
    this.setState({value: ""});
  },

  _onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  render: function(){
    return (
      <div className="EntryField">
        <input type="text" ref={(a) => this._input = a} placeholder="Input your new Content" onChange={this._onChange} />
        <button onClick={this._onAdd}>Add Content</button>
      </div>
    );
  }
});

module.exports = EntryField;