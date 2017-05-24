import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../../actions/items'
import {ListView} from 'react-native'
import {connect} from 'react-redux'
import {ListItem,View, Text} from 'native-base'
function mapStateToProps(state){
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.text !== r2.text})
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
    return <View>{this.props.onlineItems.length > 0 ?
          <ListView dataSource={this.state.dataSource} renderRow={(item)=>
              <ListItem><Text>{item.text}</Text></ListItem>
          }/> : <Text>Empty</Text>}</View>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(InfluencesList)
