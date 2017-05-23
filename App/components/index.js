import React, {Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Collect from './collect';
import Influences from './onboarding/influences'

const App = StackNavigator({
  OnboardingActivities: {
    screen: Influences,
    screenProps: { filter: "activities" },
  },
  OnboardingPeople: {screen: Influences, filter: "people"},
  Collect: {screen: Collect},
},{
  // headerMode: 'screen'
  }
);

export default App;
