import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Icon, Header,Right, Content, Footer, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import data  from '../dev/data'
import Colors from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Collect extends Component {
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

    headerRight: <Button transparent onPress={()=>navigation.navigate('EditInfluences')}>
      <Icon name="menu"/>
    </Button>
  });
  render(){
    var deck;
    var {swiping} = this.state || {};
    var swipingText = {left: 'Less happy', right: 'Happier'}[swiping]
    console.log("cards:", data.cards)
    return (
            <Container >
                <Content style={{padding: 20}} scrollEnabled={false}>
                  <Container>{/* Container needed to make it show up on Android*/}
                      <DeckSwiper
                          ref={(_deck)=> deck = _deck}
                          dataSource={data.cards}
                          onSwiping={(direction, dx)=>{
                            this.setState({...this.state, 'swiping': direction})
                          }}
                          renderItem={item =>
                              <Card style={{ elevation: 3 }}>
                                  <CardItem style={{justifyContent: 'center'}}>
                                    <Text>HOW DO YOU FEEL TODAY ABOUT...</Text>
                                  </CardItem>
                                  <CardItem cardBody style={{alignSelf: 'center'}}>
                                      <Image style={{ resizeMode: 'cover', width: 300, height: 300 }} source={item.image} />
                                  </CardItem>
                                  <CardItem style={{justifyContent: 'center'}}>
                                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                      <Text>{(swipingText || item.text).toUpperCase()}</Text>
                                  </CardItem>
                              </Card>
                          }
                      />
                    </Container>

                </Content>
                <Footer style={{height: 100, padding: 20, backgroundColor: null, borderTopWidth: 0}}>
                  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button onPress={ ()=> deck._root.swipeLeft()} style={{backgroundColor: Colors.red}}>
                      <Icon name="sad"/>
                      <Text>Less Happy</Text>
                    </Button>
                    <Button transparent><Text style={{color: Colors.dark}}>SKIP</Text></Button>
                    <Button onPress={ ()=> deck._root.swipeRight()} style={{backgroundColor: Colors.yellow}}>
                      <Icon name="md-happy"/>
                      <Text>Happier</Text>
                    </Button>
                  </View>
                </Footer>
            </Container>
        );
  }
}
