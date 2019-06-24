/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  ScrollView
} from "react-native";
import { Constants, Font } from "expo";

import firebase from "./src/config/firebase";
import AppDrawerContainer from "./src/navigations/AppDrawerNavigator";
import Login from "./src/screens/auth/Login";
import LoadingScreen from "./src/screens/LoadingScreen";

export default class App extends Component {
  state = {
    isUserLoggedIn: null
  };
  componentDidMount() {
    this.checkIfUserLogggedIn();
  }

  checkIfUserLogggedIn() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user ");
        this.setState({
          isUserLoggedIn: true
        });
      } else {
        console.log("no user !!! :");
        this.setState({
          isUserLoggedIn: false
        });
      }
    });
  }

  render() {
    const { isUserLoggedIn } = this.state;

    if (isUserLoggedIn == null) {
      return <LoadingScreen />;
    }

    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.primaryLightThemeColor}
          showHideTransition="fade"
        /> */}
        {isUserLoggedIn ? <AppDrawerContainer /> : <Login />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: Colors.primaryThemeColor
  }
});
