import React from 'react';
import TodoDispatcher from '../dispatchers/TodoDispatcher.jsx'
import TodoStore from '../stores/TodoStore.jsx'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem() {
    this.props.todoDispatcher.deleteItem(this.props.item.id)
  }

  render() {
    return <li>{this.props.item.text} <a onClick={this.deleteItem}>[Delete]</a></li>
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => <TodoItem todoDispatcher={this.props.todoDispatcher} item={item} key={item.id}/>)}
      </ul>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.todoDispatcher = new TodoDispatcher()
    this.todoStore = new TodoStore(this.todoDispatcher)
    this.state = {
      items: this.todoStore.getAll(),
      currentItem: "",
      searchQuery: ""
    }
    this.updateCurrentItem = this.updateCurrentItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.filterResults = this.filterResults.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  addItem(event) {
    event.preventDefault()
    this.todoDispatcher.addItem(this.state.currentItem)
    this.setState({currentItem: ""})
  }

  componentDidMount() {
    this.todoStore.addChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({items: this.todoStore.getAll()})
  }

  filterResults(event) {
    this.setState({searchQuery: event.target.value})
  }

  filteredItems() {
    return this.state.items.filter(item => item.text.startsWith(this.state.searchQuery))
  }

  updateCurrentItem(event) {
    this.setState({currentItem: event.target.value})
  }

  render() {
    return (
      <div id="content">
        <input onChange={this.filterResults} value={this.state.searchQuery} placeholder="Filter TODOs"></input>
        <TodoList ref="todoList" todoDispatcher={this.todoDispatcher} items={this.filteredItems()} />
        <form id="new-item-form" onSubmit={this.addItem}>
          <input placeholder="Enter a TODO item" onChange={this.updateCurrentItem} value={this.state.currentItem} ref="input" id="new-item-input"></input>
          <button ref="button">Enter todo item</button>
        </form>
      </div>
    )
  }
}
