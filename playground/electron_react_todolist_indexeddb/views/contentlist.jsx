var React = require('react');
var ContentList = React.createClass({
  _onDelete: function(i) {
    this.props.onDelete(i);
  },
  render: function() {
    return (
      <ul>
        {
          this.props.contents.map(function(content, i) {
            if (content.deleteContent == 0) {
              return (
                <li key={i}>
                  {content.item}<input type="button" value="delete" onClick={this._onDelete.bind(this,i )}/>
                </li>
              )
            }
          },this)
        }
      </ul>
    );
  }
});

module.exports = ContentList;