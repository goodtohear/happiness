import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, Header, Content, Footer, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import data  from '../dev/data'
import Colors from '../styles/colors'




export default class Collect extends Component {
  static navigationOptions = {
    title: "Happiness"
  };
  render(){
    var deck;
    var {swiping} = this.state || {};
    var swipingText = {left: 'Less happy', right: 'Happier'}[swiping]
    console.log("cards:", data.cards)
    return (
            <Container style={{paddingTop: 20}}>
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
                                  <CardItem>
                                      <Left>
                                          <Thumbnail source={item.image} />
                                          <Body>
                                              <Text>{item.text}</Text>
                                              <Text note>{swipingText}</Text>
                                          </Body>
                                      </Left>
                                  </CardItem>
                                  <CardItem cardBody style={{alignSelf: 'center'}}>
                                      <Image style={{ resizeMode: 'cover', width: 300, height: 300 }} source={item.image} />
                                  </CardItem>
                                  <CardItem>
                                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                      <Text>{item.name}</Text>
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
                    <Button style={{marginLeft: 20, backgroundColor: Colors.grey}}><Icon name="close"/></Button>
                    <Button onPress={ ()=> deck._root.swipeRight()} style={{marginLeft: 20, backgroundColor: Colors.yellow}}>
                      <Icon name="md-happy"/>
                      <Text>Happier</Text>
                    </Button>
                  </View>
                </Footer>
            </Container>
        );
  }
}
