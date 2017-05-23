// not sure why I am putting firebase at the root, I'm just following https://github.com/bruz/react-native-redux-groceries/blob/master/src/firebase.js
import { initializeApp } from 'firebase'
import {userLoggedIn} from './actions/user'
import {addItemSuccess, removeItemSuccess, goOnline, goOffline} from './actions/items'

import config from '../config'
const firebaseApp = initializeApp(config.firebase)

export const itemsRef = firebaseApp.database().ref('items')
const connectedRef = firebaseApp.database().ref('.info/connected')

firebaseApp.auth().signInAnonymously().catch((error)=>{
  console.error(error)
})

export function syncFirebase(store){

  firebaseApp.auth().onAuthStateChanged((user)=>{
    if(user){
      store.dispatch(userLoggedIn(user))
    }else{
      // no user
    }
  })

  itemsRef.on('child_added', (snapshot) => {
    store.dispatch(addItemSuccess(snapshot.val()))
  })

  itemsRef.on('child_removed', (snapshot)=>{
    store.dispatch(removeItemSuccess(snapshot.val().id))
  })

  connectedRef.on('value', snap => {
    if(snap.val() === true) {
      store.dispatch(goOnline())
    }else{
      store.dispatch(goOffline())
    }
  })
}
