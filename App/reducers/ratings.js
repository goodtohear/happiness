import {
  ADD_RATING_SUCCESS
} from '../actions/ratings'

const initialState = {
  lastRating: null
}

export default function reducer(state = initialState, action){
  switch (action.type) {
  case ADD_RATING_SUCCESS:
      return {
        ...state,
        lastRating: action.rating,
        itemId: action.itemId
      }
      break;
    default:
      return state
  }
}
