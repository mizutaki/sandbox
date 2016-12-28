var Perf = React.addons.Perf;

var tableColumns = ['名前', '地域', '番号'];
var tableData = [
  {id:1, name:'山田', area:'東京都', number:'898989'},
  {id:2, name:'山田', area:'東京都', number:'898989'},
  {id:3, name:'山田', area:'東京都', number:'898989'}
];

var ContactTable = React.createClass({
  render: function() {
    return (<table>
      {this.props.children}
    </table>);
  }
});

ContactTable.Header = React.createClass({
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

ContactTable.Body = React.createClass({
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
      <ContactTable.Header title={this.props.title}/>
      <ContactTable.Body data={this.props.data}/>
    </table>);
  }
});
Perf.start();
ReactDOM.render(
  <DispTable title={tableColumns} data={tableData}/>,
  document.querySelector('#content')
);
Perf.stop();
var measurements = Perf.getLastMeasurements();
Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
