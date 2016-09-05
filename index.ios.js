import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, TextInput, StyleSheet, View, Text } from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return <Text>{display}</Text>
  }
}

class CustomTextOutput extends Component {
  render() {
    return <Text>{this.props.text}</Text>
  }
}


class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (

        <ScrollView >
          <View style={styles.itemsCenter}>
          <Text style={[styles.welcome, styles.bigblue]}>
              Vincent's app
          </Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Greeting name="Vincent" />
          <Greeting name="Bassie" />
          <Greeting name="Adriaan" />
          <Blink text="I love to blink" numberOfLines={5} />
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <CustomTextOutput text={this.state.text} />
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} style={{width: 193, height: 110}}/>
          </View>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  itemsCenter: {
    alignItems: 'center'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
  },
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
