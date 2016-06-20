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

  it('checks store via dispatcher', () => {
    let myDispatcher = new TodoDispatcher()
    let todoStore2 = new TodoStore(myDispatcher)

    myDispatcher.addItem('store me')

    expect(todoStore2.getAll()).toEqual([{id: 0, text: 'store me'}])
  })
})
