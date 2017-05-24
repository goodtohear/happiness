import {
  CONNECTION_CHECKING,
  CONNECTION_CHECKED,
  CONNECTION_ONLINE,
  CONNECTION_OFFLINE
} from '../actions/connection'

const initialState = {
  connectionChecked: false
}

export default function reducer(state = initialState, action) {
  let list

  switch (action.type) {
  case CONNECTION_CHECKING:
    return {
      ...state,
      connectionChecked: false
    }
  case CONNECTION_CHECKED:
    return {
      ...state,
      connectionChecked: true
    }
  case CONNECTION_ONLINE:
    return {
      ...state,
      connectionChecked: true,
      connected: true
    }
  case CONNECTION_OFFLINE:
    return {
      ...state,
      connectionChecked: true,
      connected: false
    }
  default:
    return state
  }
}
