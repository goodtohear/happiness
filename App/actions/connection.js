
export const CONNECTION_CHECKING = 'CONNECTION_CHECKING'
export const CONNECTION_CHECKED = 'CONNECTION_CHECKED'
export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'


export function checkConnection() {
  return dispatch => {
    dispatch({type: CONNECTION_CHECKING})
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
