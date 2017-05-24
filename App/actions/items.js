import offline from 'react-native-simple-store'
import { itemsRef } from '../firebase'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS'
export const OFFLINE_ITEMS_LOADED = 'OFFLINE_ITEMS_LOADED'

export function addItem(object) {
  const id = Math.random().toString(36).substring(7)
  const itemRef = itemsRef.child(id)

  itemRef.set({ // insert
    ...object,
    id,
    time: new Date().getTime()
  })

  return {
    type: ADD_ITEM
  }
}

export function addItemSuccess(itemData) {
  return {
    type: ADD_ITEM_SUCCESS,
    itemData: itemData
  }
}

export function removeItem(id) {
  itemsRef.child(id).remove()

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
