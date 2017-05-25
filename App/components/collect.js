import React, { Component } from 'react';
import {Image} from 'react-native';
import { Segment, Container, Icon, Header,Right, Content, Footer, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import data from '../dev/data'
import Colors from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addRating} from '../actions/ratings'
import _ from 'lodash'
import { connect } from 'react-redux'

var deck;
class Collect extends Component {
  static navigationOptions = ({navigation})=>({
    // title: "Happiness".toUpperCase(),
    headerTitleStyle:{
      fontFamily: 'OpenSans-CondensedBold'
    },

    tabBarLabel: 'Collect',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
        size={26}
        style={{ color: tintColor }}  />),
    headerTitle: (<Segment>
      <Button first active><Text>Big</Text></Button>
      <Button last><Text>Discreet</Text></Button>
      </Segment>),
    headerRight: <Button transparent onPress={()=>navigation.navigate('EditInfluences')}>
      <Icon name="menu"/>
    </Button>
  });

  onSwipe(positive){
    console.log("state", deck.state)
    this.props.addRating({item: deck.state.selectedItem, positive})
  }
  onSwipeLeft(){
    this.onSwipe(false)
  }
  onSwipeRight(){
    this.onSwipe(true)
  }
  renderCard = (item, swipingText) =>{
    return (<Card style={{ elevation: 3 }}>
        <CardItem style={{justifyContent: 'center'}}>
          <Text>HOW DO YOU FEEL TODAY ABOUT...</Text>
        </CardItem>
        <CardItem cardBody style={{alignSelf: 'center'}}>
            <Image style={{ resizeMode: 'cover', width: 300, height: 300 }} source={item.image} />
        </CardItem>
        <CardItem style={{justifyContent: 'center'}}>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{(swipingText || item.text || "").toUpperCase()}</Text>
        </CardItem>
    </Card>)
  }
  render(){
    var {swiping} = this.state || {};
    var swipingText = {left: 'Less happy', right: 'Happier'}[swiping]
    const {lastRating, items} = this.props
    return (
            <Container>
                {lastRating ? (
                  <Header style={{height: 44, backgroundColor: Colors.dark, paddingTop: 0}}>
                    <Text style={{color: Colors.light, paddingTop: 9, paddingRight: 10}}>
                      {lastRating._item.text} made you {lastRating.positive ? 'happier' : 'less happy'} today
                    </Text>
                    <Button transparent>
                      <Ionicons name='ios-create-outline' size={28} style={{color: Colors.light}}/>
                      <Text style={{paddingLeft: 5}}>Write more</Text>
                    </Button>
                  </Header>) : null }
                <Content style={{padding: 20}} scrollEnabled={false}>
                  <Container>{/* Container needed to make it show up on Android*/}
                      <DeckSwiper
                          ref={(_deck)=> deck = (_deck||{})._root}
                          dataSource={items}
                          onSwiping={(direction, dx)=>{
                            this.setState({...this.state, 'swiping': direction})
                          }}
                          onSwipeLeft={(item)=>this.onSwipeLeft(arguments)}
                          onSwipeRight={this.onSwipeRight.bind(this)}
                          renderItem={item =>this.renderCard(item, swipingText) }
                      />
                    </Container>

                </Content>
                <Footer style={{height: 100, padding: 20, backgroundColor: null, borderTopWidth: 0}}>
                  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button onPress={ ()=> deck.swipeLeft()} style={{backgroundColor: Colors.red}}>
                      <Icon name="sad"/>
                      <Text>Less Happy</Text>
                    </Button>
                    <Button transparent><Text style={{color: Colors.dark}}>SKIP</Text></Button>
                    <Button onPress={ ()=> deck.swipeRight()} style={{backgroundColor: Colors.yellow}}>
                      <Icon name="md-happy"/>
                      <Text>Happier</Text>
                    </Button>
                  </View>
                </Footer>
            </Container>
        );
  }
}
const mapStateToProps = state => {
  return {
    lastRating: state.ratings.lastRating,
    items: state.items.onlineList
  }
}
export default connect(mapStateToProps, {addRating})(Collect)
