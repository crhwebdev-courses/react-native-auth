import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Hello React!</Text>
      </View>
    );
  }
}

export default App;
