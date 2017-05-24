export const USER_LOGGED_IN = 'USER_LOGGED_IN'

import firebase from 'firebase'
import {monitorItems} from './items'

export function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    user: user
  }
}
export function loginAnonymously(store){
    var {currentUser} = firebase.auth()
    if(currentUser === null){
      firebase.auth().signInAnonymously().catch((error)=>{
        console.error(error)
      })
    }
}
export function monitorUsers(store){
  firebase.auth().onAuthStateChanged((user)=>{
    console.log("auth state changed")
    if(user){
      monitorItems(store)
      store.dispatch(userLoggedIn(user))
    }else{
      console.error("User logout handled and not sure if I even want to support this.")
    }
  })

}
