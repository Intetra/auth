// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

// Create a component
class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCOuDMnHsiN64gHvjWGo7zp6wqeSBdM5DQ',
      authDomain: 'auth-177f1.firebaseapp.com',
      databaseURL: 'https://auth-177f1.firebaseio.com',
      projectId: 'auth-177f1',
      storageBucket: 'auth-177f1.appspot.com',
      messagingSenderId: '293697220351'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

// Render it to the device
export default App;
