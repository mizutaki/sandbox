var React = require('react');
var Header = require('./header.jsx');
var EntryField = require('./entryfield.jsx');
var ContentList = require('./contentlist.jsx');
var IndexedDB = require('../indexeddb.js');

IndexedDB.init();
var initialData =
    [
      {item: 'test1', deleteContent: 0},
      {item: 'test2', deleteContent: 1},
      {item: 'test3', deleteContent: 0}
    ]
var WatchSomeday = React.createClass({
  getInitialState: function() {
    return {
      contents: initialData
    }
  },

  onAdd: function(newContent) {
    this.setState({
      contents : this.state.contents.concat({item:newContent, deleteContent:0})
    });
    IndexedDB.add(newContent);
  },

  onDelete: function(i) {
    var targetContent = this.state.contents[i];
    targetContent.deleteContent = 1;
    this.setState({contents: this.state.contents});
    console.log(targetContent.item)
    indexedDB.del();
  },
  render: function() {
    return (
      <div className="watchSomedayApp">
        <Header/>
        <EntryField onAdd={this.onAdd}/>
        <ContentList contents={this.state.contents} onDelete={this.onDelete} />
      </div>
    );
  }
});

module.exports = WatchSomeday;