
export const CONNECTION_CHECKING = 'CONNECTION_CHECKING'
export const CONNECTION_CHECKED = 'CONNECTION_CHECKED'
export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'

import firebase from 'firebase'

export function monitorConnection(store){
  const connectedRef = firebase.database().ref('.info/connected')
  connectedRef.on('value', snap => {
    if(snap.val() === true) {
      store.dispatch(goOnline())
    }else{
      store.dispatch(goOffline())
    }
  })
}

export function checkConnection() {
  return dispatch => {
    dispatch({type: CONNECTION_CHECKING})
    // FIXME: don't have this setTimeout
    setTimeout(() => dispatch({type: CONNECTION_CHECKED}), 5000)
  }
}

export function goOnline() {
  return {
    type: CONNECTION_ONLINE
  }
}

export function goOffline() {
  return {
    type: CONNECTION_OFFLINE
  }
}
