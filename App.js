/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Constants, Font, Permissions, Notifications } from "expo";

import firebase from "./src/config/firebase";
import AppDrawerContainer from "./src/navigations/AppDrawerNavigator";
import Login from "./src/screens/auth/Login";
import LoadingScreen from "./src/screens/LoadingScreen";

export default class App extends Component {
  state = {
    isUserLoggedIn: null
  };
  componentDidMount() {
    this.loadFonts();
  }t

  loadFonts = async () => {
    await Font.loadAsync({
      "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Italic": require("./src/assets/fonts/Lato/Lato-Italic.ttf"),
      "Lato-BoldItalic": require("./src/assets/fonts/Lato/Lato-BoldItalic.ttf")
    });
    this.checkIfUserLogggedIn();
  };

  registerForPushNotificationAsync = async user => {
    console.log("notification register");
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    var updates = {};

    updates["/expoToken"] = token;
    firebase
      .database()
      .ref("users")
      .child(user.uid)
      .update(updates)
      .then(() => console.log("updated"));
  };

  updatePushTokenForUser = user => {
    this.registerForPushNotificationAsync(user);
  };

  checkIfUserLogggedIn() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user ");
        this.setState(
          {
            isUserLoggedIn: true
          },
          () => this.updatePushTokenForUser(user)
        );
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
