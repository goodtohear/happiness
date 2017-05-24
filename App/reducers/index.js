import items from './items'
import connection from './connection'
import {combineReducers} from 'redux'

const initialState = {
  navColor: '#fff',
  navStyle: {backgroundColor: '#ff585b', color: '#fff', padding: 20}
}

export default combineReducers({
  items
})
