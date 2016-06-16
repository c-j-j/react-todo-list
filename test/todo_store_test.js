import TodoDispatcher from 'dispatchers/TodoDispatcher'
import TodoStore from 'stores/TodoStore';

describe('TodoStore', ()=> {

  var todoStore

  beforeEach(()=>{
    todoStore = new TodoStore(new TodoDispatcher())
  })

  it('is initially empty', () => {
    expect(todoStore.getAll()).toEqual([])
  })

  it('adds item to store', () => {
    todoStore.addItem('Hello')
    expect(todoStore.getAll()).toEqual([{id: 0,text: 'Hello'}])
  })
})
