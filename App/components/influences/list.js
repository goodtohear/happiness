import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../../actions/items'
import {ListView} from 'react-native'
import {connect} from 'react-redux'
import {ListItem,View, Text,Badge} from 'native-base'
import _ from 'lodash'
import colors from "../../styles/colors"
function mapStateToProps(state){
  return {
    items: state.items.onlineList
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
      dataSource: ds.cloneWithRows(props.items)
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.items)
    })
  }
  render(){
    return <View>{this.props.items.length > 0 ?
          <ListView dataSource={this.state.dataSource} renderRow={(item)=>
              <ListItem>
                <Badge style={{backgroundColor: _.size(item.ratings) == 0 ? colors.grey : colors.yellow }}><Text>{_.size(item.ratings)}</Text></Badge>
                <Text style={{paddingLeft: 10}}>{item.text}</Text>
              </ListItem>
          }/> : <Text>Empty</Text>}</View>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(InfluencesList)
