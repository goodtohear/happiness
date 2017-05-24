import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  OFFLINE_ITEMS_LOADED,
} from '../actions/items'

const initialState = {
  onlineList: [],
  offlineList: [],
}

export default function reducer(state = initialState, action) {
  let list

  switch (action.type) {
  case ADD_ITEM_SUCCESS:
    list = state.onlineList.concat([action.itemData]).sort((a, b) => b.time - a.time)

    return {
      ...state,
      onlineList: list,
      offlineList: list
    }
  case REMOVE_ITEM_SUCCESS:
    list = state.onlineList.slice(0)
    const index = list.map(i => i.id).indexOf(action.id)
    list.splice(index, 1)

    return {
      ...state,
      onlineList: list,
      offlineList: list
    }
  case OFFLINE_ITEMS_LOADED:
    return {
      ...state,
      offlineList: action.items,
      offlineLoaded: true
    }
  default:
    return state
  }
}
