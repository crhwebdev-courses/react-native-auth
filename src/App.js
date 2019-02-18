import React, { Component } from 'react';
import { View } from 'react-native';
//need to use version ^5.0.3 because newer versions give errors with react-native
import firebase from 'firebase';
import Config from '../.config';
import { Header, Button, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: false
  };

  componentWillMount() {
    //initialize firebase auth
    firebase.initializeApp({
      apiKey: Config.API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DATABASE_URL,
      projectId: Config.PROJECT_ID,
      storageBucket: Config.STORAGE_BUCKET,
      messagingSenderId: Config.MESSEGING_SENDER_ID
    });

    //register event handler for when a user signs in or signs out
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Card>
          <CardSection>
            <Button onPress={() => console.log('logging out!')}>Log Out</Button>
          </CardSection>
        </Card>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
