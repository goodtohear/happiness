import React from 'react'
import {Button, Text} from 'native-base'

export function navigationOptions({title}){
  return ({navigation,screenProps}) => {
    var {filter} = (navigation.state.params || {})
    return {
      title: title.toUpperCase(),
      // header: <Header><Text>YEAH</Text></Header>,
      headerTitleStyle:{
        fontFamily: 'OpenSans-CondensedBold'
      },
      headerRight: <Button transparent
                    onPress={()=>navigation.goBack(null)}>
                    <Text>{"Done".toUpperCase()}</Text>
                   </Button>
  }}
}
