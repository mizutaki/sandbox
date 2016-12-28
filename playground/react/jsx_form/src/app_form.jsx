let React = require('react');
let ReactDOM = require('react-dom');

let FormSubmit = React.createClass({
  getInitialState: function() {
    return {selection: this.props.selection}
  },
  handleChange: function(event) {
    let selection = this.state.selection;
    let position = selection.indexOf(event.target.value);
    if (event.target.checked) {
      selection.push(event.target.value);
    } else {
      selection.splice(position, 1);
    }
    this.setState({selection: selection});
    console.log(this.state.selection);
  },
  handleSubmit: function(event) {
    event.preventDefault();
    if (this.state.selection.length < 2) {
      return;
    }
    console.log('Submitting: ', this.state.selection);
    this.setState({selection: []});
  },
  render: function() {
    return (<form onSubmit={this.handleSubmit}>
      2つ以上をえらんでください：
        <div>
          <input
            type="checkbox"
            value="first"
            checked={this.state.selection.indexOf('first') !== -1}
            onChange={this.handleChange}
            />最初の選択
        </div>
        <div>
          <input
            type="checkbox"
            value="second"
            checked={this.state.selection.indexOf('second') !== -1}
            onChange={this.handleChange}
            />に番目の選択
        </div>
        <div>
          <input
            type="checkbox"
            value="third"
            checked={this.state.selection.indexOf('third') !== -1}
            onChange={this.handleChange}
            />三番めの選択
        </div>
        <input type="submit" value="決定"/>
    </form>
  );
  }
});

ReactDOM.render(
  <FormSubmit selection={[]}/>,
  document.querySelector('#myApp')
);
