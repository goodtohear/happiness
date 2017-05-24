import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, Header,Right, Content, Footer, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Reports extends Component {
  static navigationOptions = ({navigation})=>({
    headerTitleStyle:{
      fontFamily: 'OpenSans-CondensedBold'
    },
    tabBarLabel: 'Reports',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-pie' : 'ios-pie-outline'}
        size={26}
        style={{ color: tintColor }}    /> ),
    headerRight: <Button transparent onPress={()=>navigation.navigate('EditInfluences')}>
      <Icon name="add"/>
    </Button>
  });
  render(){
    return (
    <View style={{padding: 20}}>
      <Text>List of reports</Text>
    </View>)
  }
}
