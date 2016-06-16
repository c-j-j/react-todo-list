import Flux from 'flux'

export default class TodoDispatcher extends Flux.Dispatcher {

  addItem(text) {
    this.dispatch({
      actionName: 'new-item',
      newItem: text
    })
  }

  deleteItem(itemID) {
    this.dispatch({
      actionName: 'delete-item',
      itemID: itemID
    })
  }
}
