import React, {Component} from 'react';
import {View, Header} from 'native-base';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Collect from './collect';
import Reports from './reports'
import Profile from './profile'
import Activities from './onboarding/activities'
import People from './onboarding/people'

const MainScreenNavigator = TabNavigator({
  Profile: {screen: Profile},
  Collect: {screen: Collect },
  Reports: {screen: Reports}
},{
  initialRouteName: 'Collect'
});

const EditInfluences = StackNavigator({
  EditActivities: { screen: Activities},
  EditPeople: { screen: People}
})

const App = StackNavigator({
  Home: {screen: MainScreenNavigator},
  EditInfluences: {
    screen: EditInfluences,
    navigationOptions: {
      header: null
    }
  }
},{
  mode: 'modal'
})

export default App;
