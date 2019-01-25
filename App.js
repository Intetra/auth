// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

// Create a component
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCOuDMnHsiN64gHvjWGo7zp6wqeSBdM5DQ',
      authDomain: 'auth-177f1.firebaseapp.com',
      databaseURL: 'https://auth-177f1.firebaseio.com',
      projectId: 'auth-177f1',
      storageBucket: 'auth-177f1.appspot.com',
      messagingSenderId: '293697220351'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

// Render it to the device
export default App;
