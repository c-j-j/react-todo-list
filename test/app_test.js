import React from 'react';
import { render } from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import App from 'components/App';

describe('TodoApp', ()=> {

  it('starts with an empty list', () => {
    let todoApp = render(<App />, document.createElement('div'))

    expect(todoApp.state.items).toEqual([])
  })

  it('adds an item to the list', () => {
    let todoApp = TestUtils.renderIntoDocument(<App />, document.createElement('div'))

    let input = todoApp.refs.input
    input.value = 'new todo item';
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});

    let form = TestUtils.findRenderedDOMComponentWithTag(todoApp, 'form');
    TestUtils.Simulate.submit(form)

    expect(todoApp.state.items).toEqual(['new todo item'])
  })
})
