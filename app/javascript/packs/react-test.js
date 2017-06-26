import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

var FormSubmit = React.createClass({
  getInitialState: function () {
    return {selection: this.props.selection};
  },

  handleChange: function (event) {
    var selection = this.state.selection
    var position = selection.indexOf(event.target.value);
    if (event.target.checked) {
      selection.push(event.target.value);
    } else {
      selection.splice(position, 1);
    }
    this.setState({selection: selection});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    if (this.state.selection.length < 2)
      return;
    console.log('Submitting:', this.state.selection);
    this.setState({selection: []});
  },

  render: function () {
    return (<form onSubmit={this.handleSubmit}>
      ２つ以上を選んでください：
      <div>
        <input
          type="checkbox"
          value="first"
          checked={this.state.selection.indexOf('first') !== -1}
          onChange={this.handleChange}
        />最初の選択肢
      </div>
      <div>
        <input
            type="checkbox"
            value="second"
            checked={this.state.selection.indexOf('second') !== -1}
            onChange={this.handleChange}
        />次の選択肢
      </div>
      <div>
        <input
            type="checkbox"
            value="third"
            checked={this.state.selection.indexOf('third') !== -1}
            onChange={this.handleChange}
        />最後の選択肢
      </div>
      <input type="submit" value="決定" />
    </form>);
  }
});

var tableColumns = ['名前', '地域', '番号'];

var tableData = [
  {id: 1, name: '山田太郎', area: '東京都港区', number: '8513321'},
  {id: 2, name: '鈴木次郎', area: '神奈川県横浜市', number: '6912312'},
  {id: 3, name: '田中三郎', area: '大阪府東大阪市', number: '0729825867'},
];

var ContactTable = React.createClass({
  render: function () {
    return (<table>
      {this.props.children}
    </table>);
  }
});

ContactTable.Header = React.createClass({
  render: function () {
    var tableTitles = this.props.title.map(function (cName, i) {
      return (<th key={i}>{cName}</th>);
    });
    return (<thead>
      <tr>
        {tableTitles}
      </tr>
    </thead>);
  }
});

ContactTable.Body = React.createClass({
  render: function () {
    var tableRows = this.props.data.map(function (person) {
      return (<tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.area}</td>
        <td>{person.number}</td>
      </tr>);
    });
    return (<tbody>{tableRows}</tbody>)
  }
})

var DispTable = React.createClass({
  render: function () {
    return (<ContactTable className="regularTable">
      <ContactTable.Header title={this.props.title}/>
      <ContactTable.Body data={this.props.data} />
    </ContactTable>);
  }
});


var CheckAnimate = React.createClass({
  getInitialState: function () {
    return {checked: false,
            visibleText: ''};
  },
  checkChange: function (event) {
    if (event.target.checked) {
      this.setState({visibleText: '普段は見えないテキスト'})
    } else {
      this.setState({visibleText: ''})
    }
    this.setState({checked: event.target.checked});
  },
  render: function () {
    return (<div>
      <CSSTransitionGroup
        transitionName="fadingText"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={800}>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.checkChange}
          />隠れたテキストを表示
        </div>
        <h2 key={this.state.checked}>{this.state.visibleText}</h2>
      </CSSTransitionGroup>
    </div>);
  }
});

var TodoList = React.createClass({
  getInitialState: function () {
    return {todoItems: [
      {id: 0, name: 'アイデアを出す'},
      {id: 1, name: 'サンプルを作る'},
      {id: 2, name: 'ドキュメントを書く'}
    ],
    newItem: ''};
  },
  handleEdit: function (event) {
    this.setState({newItem: event.target.value});
  },
  handleAdd: function (event) {
    var idName = {id: Date.now(), name: this.state.newItem};
    var newItems = this.state.todoItems.concat(idName);
    this.setState({todoItems: newItems});
    this.setState({newItem: ''})
  },
  handleRemove: function(i) {
    var tempItems = this.state.todoItems;
    tempItems.splice(i, 1);
    this.setState({todoItems: tempItems});
  },
  render: function () {
    var currentItems = this.state.todoItems.map((item, i) =>
      <div key={item.id}>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => this.handleRemove(i)}
        />{item.name}
      </div>);

    return (<div>
      ToDo:
      <input
        type="text"
        value={this.state.newItem}
        onChange={this.handleEdit}
      />
      <input
          type="button"
          value="追加"
          onClick={this.handleAdd}
      />
      <CSSTransitionGroup
        transitionName="fadingText"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={800}
        transitionAppear={true}
        transitionAppearTimeout={800}>
        {currentItems}
      </CSSTransitionGroup>
    </div>);
  }
});

ReactDOM.render(
    <TodoList />,
    document.getElementById('container')
);

