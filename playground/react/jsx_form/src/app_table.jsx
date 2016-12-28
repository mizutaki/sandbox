let React = require('react');
let ReactDOM = require('react-dom');
let tableColumns = ['名前', '地域', '番号'];
let tableData = [
  {id:1, name:'山田', area:'東京都', number:'898989'},
  {id:2, name:'山田', area:'東京都', number:'898989'},
  {id:3, name:'山田', area:'東京都', number:'898989'}
];
let TableHeader = React.createClass({
  render: function() {
    var tableTitles = this.props.title.map(function(cName, i) {
      return (<th key={i}>
        {cName}
      </th>);
    });
    return (<thead>
      <tr>
        {tableTitles}
      </tr>
    </thead>);
  }
});
let TableBody = React.createClass({
  render: function() {
    let tableRows = this.props.data.map(function(person) {
      return (<tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.area}</td>
        <td>{person.number}</td>
      </tr>);
    });
    return (<tbody>
      {tableRows}
    </tbody>)
  }
});
var DispTable = React.createClass({
  render: function() {
    return (<table className="regularTable">
      <TableHeader title={this.props.title}/>
      <TableBody data={this.props.data}/>
    </table>);
  }
});
ReactDOM.render(
  <DispTable title={tableColumns} data={tableData}/>,
  document.querySelector('#myApp')
);
