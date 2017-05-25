export const ADD_RATING = 'ADD_RATING'
export const ADD_RATING_SUCCESS = 'ADD_RATING_SUCCESS'

import firebase from 'firebase'

export const addRating = ({item, positive})=>{
  const { currentUser } = firebase.auth()
  console.log("adding item rating", item)
  return (dispatch)=>{

    const itemsPath = `users/${currentUser.uid}/items`
    const itemId = item.id
    const ratingsPath = `${itemId}/ratings`
    const {key} = firebase.database().ref(itemsPath)
    .child(ratingsPath)
    .push({positive, time: new Date().getTime()})

    firebase.database().ref(`${itemsPath}/${ratingsPath}/${key}`).on('value', snapshot => {
      dispatch({
        type: ADD_RATING_SUCCESS, rating: {
          ...snapshot.val(),
          _item: item,
          key
        }
      })
    })
    // .then((result)=>{
    //   console.log("pushed", arguments)
    //   dispatch({type: ADD_RATING, rating: result.snapshot.val() })
    // })
  }
}
