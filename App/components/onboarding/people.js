import React, {Component} from 'react'
import {Card,CardItem,Button,Container,Text,View,Header} from 'native-base'
import NewInfluenceForm from '../influences/new'
import InfluencesList from '../influences/list'
import {headerOptions} from './header'
import {navigationOptions} from './header'

export default class People extends Component {
  static navigationOptions = navigationOptions({title: 'People'})
  continue(){
    console.log("props when continuing", this.props)
    const {navigation, screenProps} = this.props
    var {next} = screenProps || {}
    next = 'EditPeople'
    navigation.navigate(next)
  }
  render() {
    return (
      <View>
        <InfluencesList />
        <View style={{padding: 20}}>
          <NewInfluenceForm />
          <View style={{justifyContent: 'center', flexDirection: 'row', flex: 1}}>
            <Button onPress={this.continue.bind(this)}>
              <Text>{"Continue".toUpperCase()}</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
