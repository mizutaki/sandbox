var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CheckAnimate = React.createClass({
  getInitialState: function() {
    return { checked: false,
             visibleText: ''};
  },
  checkChange: function(event) {
    if (event.target.checked) {
      this.setState({visibleText: '普段見えないテキスト'});
    } else {
      this.setState({visibleText: ''});
    }
    this.setState({checked: event.target.checked});
  },
  render: function() {
    return (<div>
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.checkChange}
      />隠れたテキストを表示
      <ReactCSSTransitionGroup
        transitionName = "fadingText"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={500}>
        <h2 key={this.state.checked}>{this.state.visibleText}</h2>
      </ReactCSSTransitionGroup>
    </div>);
  }
});

ReactDOM.render(
  <CheckAnimate />,
  document.querySelector('#content')
);
