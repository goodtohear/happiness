import React, {Component} from 'react'
import {View,Text} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person'}
        size={26}
        style={{ color: tintColor }} /> ),
  }
  render(){
    return (<View style={{padding: 20}}><Text>Your profile</Text></View>)
  }
}
