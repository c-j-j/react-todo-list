import Events from 'events'
import TodoDispatcher from '../dispatchers/TodoDispatcher.jsx'

export default class TodoStore extends Events.EventEmitter {
  constructor(dispatcher) {
    super()
    this._items = []
    this.registerDispatchMethods(dispatcher)
  }

  registerDispatchMethods(dispatcher) {
    dispatcher.register((payload) => {
      switch(payload.actionName) {
        case 'new-item':
          this.addItem(payload.newItem)
          break
        case 'delete-item':
          this.deleteItem(payload.itemID)
          break
      }}
    )
  }

  addItem(item) {
    let nextID = this._items.length
    this._items.push({id: nextID, text: item})
    this._emitChange()
  }

  deleteItem(itemID) {
   this._items = this._items.filter(item => item.id != itemID)
    this._emitChange()
  }

  addChangeListener(callback_function) {
    this.on('CHANGE_EVENT', callback_function)
  }

  getAll() {
    return this._items
  }

  _emitChange() {
    this.emit('CHANGE_EVENT')
  }
}
