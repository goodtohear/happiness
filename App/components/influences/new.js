import React, {Component} from 'react'
import {View, Text} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ItemsActions from '../../actions/items'


const t = require('tcomb-form-native')
const {Form} = t.form

import {Button} from 'native-base'

const Item = t.struct({
  text: t.String
})

function mapDispatchToProps(dispatch){
  return bindActionCreators(ItemsActions, dispatch)
}


class NewInfluenceForm extends Component {
  constructor(props,context) {
    super(props,context)
    this.state = {value: null}
  }
  onSubmit() {
    var value = this.form.getValue()
    this.props.addItem(value)
    this.setState({value: null})

  }
  onChange(value){
    this.setState({value})
  }
  render(){
    return (
      <View>
        <Form
          ref={(form)=>{this.form = form}}
          type={Item}
          value={this.state.value}
          onChange={this.onChange.bind(this)}

          options={{
            auto: 'placeholders',
            fields: {
              text: {
                returnKeyType: 'done',
                enablesReturnKeyAutomatically: true,
                onSubmitEditing: (value )=> {this.onSubmit(value)}
              }
            }

          }}/>
        {/* <Button onPress={this.onSubmit.bind(this)}><Text>Add new</Text></Button>*/}
      </View>
    )
  }
}

export default connect(state => state, mapDispatchToProps)(NewInfluenceForm)
