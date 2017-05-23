import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Card,CardItem,Button,Container} from 'native-base'
import NewInfluenceForm from '../influences/new'
import InfluencesList from '../influences/list'


export default class InitialInfluencesList extends Component {
  static navigationOptions = ({navigation}) => {
    var {filter} = (navigation.state.params || {})
    return {
    title: "Add " + filter,
    headerRight: <Button transparent
                  onPress={()=>navigation.navigate('OnboardingPeople', {})}>
                  <Text>Next</Text>
                 </Button>
  }}
  continue(){
    this.props.navigation.navigate('OnboardingPeople', {filter: 'activities'})
  }
  render() {
    return (
      <View>
        <InfluencesList />
        <View style={{padding: 20}}>
          <NewInfluenceForm />
          <View style={{justifyContent: 'center', flexDirection: 'row', flex: 1}}>
            <Button onPress={this.continue.bind(this)}><Text>Continue</Text></Button>
          </View>
        </View>
      </View>
    )
  }
}
