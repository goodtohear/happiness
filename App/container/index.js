import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'
import Components from '../components/index'

import commonColorTheme from '../../native-base-theme/variables/commonColor'
import getTheme from '../../native-base-theme/components'
import { StyleProvider, View } from 'native-base';

const store = configureStore()


export default class Index extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <StyleProvider style={getTheme(commonColorTheme)}>
          <Provider store={store}>
            <Components/>
          </Provider>
        </StyleProvider>
      </View>
    )
  }
}
