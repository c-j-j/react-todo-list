import React from 'react';

class TodoList extends React.Component {
  render() {
    let renderItem = function(item) {
      return <li key={item}>{item}</li>
    }

    return (
      <ul>
        {this.props.items.map(renderItem)}
      </ul>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: "",
      searchQuery: ""
    }
    this.updateCurrentItem = this.updateCurrentItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.filterResults = this.filterResults.bind(this)
  }

  addItem(event) {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat(this.state.currentItem),
      currentItem: ""
    })
  }

  filterResults(event) {
    this.setState({searchQuery: event.target.value})
  }

  filteredItems() {
    return this.state.items.filter(item => item.startsWith(this.state.searchQuery))
  }

  updateCurrentItem(event) {
    this.setState({currentItem: event.target.value})
  }

  render() {
    return (
      <div id="content">
        <input onChange={this.filterResults} value={this.state.searchQuery} placeholder="Filter TODOs"></input>
        <TodoList items={this.filteredItems()} />
        <form onSubmit={this.addItem}>
          <input placeholder="Enter a TODO item" onChange={this.updateCurrentItem} value={this.state.currentItem} ref="input"></input>
          <button ref="button">Enter todo item</button>
        </form>
      </div>
      )
  }
}
