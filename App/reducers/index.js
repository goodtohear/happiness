import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';
import items from './items'
import {combineReducers} from 'redux'

const initialState = {
  navColor: '#fff',
  navStyle: {backgroundColor: '#ff585b', color: '#fff', padding: 20}
}

function happiness(state = initialState, action = {}) {
  switch(action.type) {
    case types.CONNECT: return {...state};
    default: return state;
  }
}
export default combineReducers({
  happiness,
  items
})
