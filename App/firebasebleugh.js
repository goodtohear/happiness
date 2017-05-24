// not sure why I am putting firebase at the root, I'm just following https://github.com/bruz/react-native-redux-groceries/blob/master/src/firebase.js
import { initializeApp } from 'firebase'
import {userLoggedIn} from './actions/user'
import {addItemSuccess, removeItemSuccess} from './actions/items'
import { goOnline, goOffline} from './actions/connection'

import config from '../config'
export const firebase = initializeApp(config.firebase)

// export const itemsRef = firebaseApp.database().ref('items')
const connectedRef = firebaseApp.database().ref('.info/connected')

var {currentUser} = firebaseApp.auth()
if(currentUser === null){
  firebaseApp.auth().signInAnonymously().catch((error)=>{
    console.error(error)
  })
}



export function syncFirebase(store){



}
