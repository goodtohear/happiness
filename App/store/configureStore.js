import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
// import syncOffline
import {syncFirebase} from '../firebase'

export default function configureStore(initialState){
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )
  // syncOffline(store)
  syncFirebase(store)

  if(module.hot){ // apparently this is like LiveReload for every module.
    module.hot.accept(()=> {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
