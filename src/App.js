import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Header } from './components/common';
import firebase from 'firebase';
import Config from '../.config';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DATABASE_URL,
      projectId: Config.PROJECT_ID,
      storageBucket: Config.STORAGE_BUCKET,
      messagingSenderId: Config.MESSEGING_SENDER_ID
    });
  }

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
