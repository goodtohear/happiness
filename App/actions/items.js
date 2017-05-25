import offline from 'react-native-simple-store'
import firebase from 'firebase'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS'
export const ONLINE_ITEMS_LOADED = 'ONLINE_ITEMS_LOADED'
export const OFFLINE_ITEMS_LOADED = 'OFFLINE_ITEMS_LOADED'

import _ from 'lodash'
import data from '../dev/data'

function itemsRef(){
  const {currentUser} = firebase.auth()
  return firebase.database().ref(`users/${currentUser.uid}/items`)
}

export function monitorItems(store){
  itemsRef().on('child_added', (snapshot) => {
    store.dispatch(addItemSuccess(snapshot.val()))
  })

  itemsRef().on('child_removed', (snapshot)=>{
    store.dispatch(removeItemSuccess(snapshot.val().id))
  })
}

export function addItem(object) {
  const id = Math.random().toString(36).substring(7)
  const itemRef = itemsRef().child(id)
  const image = _.sample(data.cards).image

  itemRef.set({ // insert
    ...object,
    id,
    image: image,
    time: new Date().getTime()
  })

  return {
    type: ADD_ITEM,
    id: id
  }
}

export function addItemSuccess(itemData) {
  return {
    type: ADD_ITEM_SUCCESS,
    itemData: itemData
  }
}

export function removeItem(id) {
  itemsRef().child(id).remove()

  return {
    type: REMOVE_ITEM,
  }
}

export function removeItemSuccess(id) {
  return {
    type: REMOVE_ITEM_SUCCESS,
    id: id
  }
}
function offlineItemsLoaded(items) {
  return {
    type: OFFLINE_ITEMS_LOADED,
    items: items
  }
}

export function loadOfflineItems() {
  return dispatch => {
    offline.get('items').then(items => {
      dispatch(offlineItemsLoaded(items || []))
    })
  }
}
