import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../../actions/items'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'
import {ListItem} from 'native-base'
function mapStateToProps(state){
  console.log("state in map to props", state)
  return {
    onlineItems: state.items.onlineList
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ItemsActions, dispatch)
}
class InfluencesList extends Component {
  constructor(props){
    super()
    console.log("ARGS", arguments)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(props.onlineItems)
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.onlineItems)
    })
  }
  render(){
    console.log("influences props", this.props)
    return <View>{this.props.onlineItems.length > 0 ?
          <ListView dataSource={this.state.dataSource} renderRow={(item)=>
              <ListItem><Text>{item.text}</Text></ListItem>
          }/> : <Text>Empty</Text>}</View>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(InfluencesList)
