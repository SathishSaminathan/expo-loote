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
import { Provider } from "react-redux";

import firebase from "./src/config/firebase";
import AppDrawerContainer from "./src/navigations/AppDrawerNavigator";
import Login from "./src/screens/auth/Login";
import LoadingScreen from "./src/screens/LoadingScreen";
import Profile from "./src/screens/Profile";
import store from "./src/store";
import Dummy from "./src/screens/DummyScreen";

class App extends Component {
  state = {
    isUserLoggedIn: null,
    isFontLoaded: false,
    user: null
  };

  componentWillMount() {
    this.loadFonts();
  }
  componentDidMount() {
    this.loadFonts();
  }

  loadFonts = async () => {
    await Font.loadAsync({
      "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Italic": require("./src/assets/fonts/Lato/Lato-Italic.ttf"),
      "Lato-BoldItalic": require("./src/assets/fonts/Lato/Lato-BoldItalic.ttf")
    });
    this.setState(
      {
        isFontLoaded: true
      },
      () => this.checkIfUserLogggedIn(this.state.user, "this")
    );
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

  checkIfUserLogggedIn = (user, status) => {
    this.setState({ status, user });
    if (this.state.isFontLoaded && this.state.status === "checked") {
      if (this.state.user) {
        console.log("user ");
        this.setState(
          {
            isUserLoggedIn: true
          },
          () => this.updatePushTokenForUser(this.state.user)
        );
      } else {
        console.log("no user !!! :");
        this.setState({
          isUserLoggedIn: false
        });
      }
    }
  };

  render() {
    const { isUserLoggedIn, user } = this.state;

    if (isUserLoggedIn == null) {
      return (
        <Provider store={store}>
          <LoadingScreen userLoaded={this.checkIfUserLogggedIn} />
        </Provider>
      );
    }

    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.primaryLightThemeColor}
          showHideTransition="fade"
        /> */}
        {/* <Profile/> */}

        <Provider store={store}>
          {isUserLoggedIn ? <Dummy/> : <Login />}
        </Provider>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
