import $ from 'jquery'
import React from 'react';
import ReactDom from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import App from 'components/App';

describe('TodoApp', ()=> {

  let todoApp

  beforeEach(()=>{
    todoApp =  TestUtils.renderIntoDocument(<App />)
  })

  it('starts with an empty list', () => {
    expect(todoApp.state.items).toEqual([])
  })

  it('adds an item to the list', () => {
    submitNewItem(todoApp, 'new todo item')

    expect(todoApp.state.items[0].text).toEqual('new todo item')
  })

  it('deletes an item from the list', () => {
    submitNewItem(todoApp, 'todo item')

    let deleteLink = TestUtils.findRenderedDOMComponentWithTag(todoApp, 'a')
    TestUtils.Simulate.click(deleteLink)

    expect(todoApp.state.items).toEqual([])
  })

  it('checks added element via the dom', () => {
    submitNewItem(todoApp, 'new item')

    expect(ReactDom.findDOMNode(todoApp.refs.todoList).textContent).toContain('new item')
  })

  function submitNewItem(todoApp, text) {
    let input = todoApp.refs.input
    input.value = text
    TestUtils.Simulate.change(input)

    let form = TestUtils.findRenderedDOMComponentWithTag(todoApp, 'form')
    TestUtils.Simulate.submit(form)
  }
})
