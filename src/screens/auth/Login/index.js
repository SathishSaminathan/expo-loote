import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import * as Expo from "expo";
import { Feather } from "@expo/vector-icons";

import firebase from "../../../config/firebase";
import AppConstants from "../../../constants/AppConstants";
import Colors from "../../../constants/ThemeConstants";
import Images from "../../../assets/images/images";
import Loader from "../../../components/Loader/Loader";
import { setUser } from "../../../store/actions";

const { width, height } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      name: "",
      image: null,
      userRef: firebase.database().ref("users"),
      loggingIn: false
    };
  }

  onSignIn = googleUser => {
    // console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(res => {
              // console.log("user sign in");
              let user = {
                gmail: res.user.email,
                profile_picture: res.additionalUserInfo.profile.picture,
                locale: res.additionalUserInfo.profile.locale,
                first_name: res.additionalUserInfo.profile.given_name,
                last_name: res.additionalUserInfo.profile.family_name,
                uid: res.user.uid,
                displayName:res.user.displayName,
                created_at: Date.now()
              };
              console.log("result.....", res);
              if (res.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + res.user.uid)
                  .set(user)
                  .then(() => {
                    console.log("user created!!!");
                    this.props.createUser(user);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                let tempUser = { ...user, last_loggedIn: Date.now() };
                firebase
                  .database()
                  .ref("/users/" + res.user.uid)
                  .update({
                    last_loggedIn: Date.now()
                  })
                  .then(() => {
                    this.props.createUser(tempUser);
                    console.log("loggedin updated");
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  signInWithGoogleAsync = async () => {
    try {
      this.setState({
        loggingIn: true
      });
      const result = await Expo.Google.logInAsync({
        behavior: "web",
        androidClientId: AppConstants.ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
      } else {
        // return { cancelled: true };
        this.setState({
          loggingIn: false
        });
        console.log("user cancelled");
      }
    } catch (e) {
      this.setState({
        loggingIn: false
      });
      console.log(e);
    }
  };

  signOutWithGoogleAsync = async () => {
    // try {
    //   const result = await Expo.Google.logOutAsync({
    //     accessToken: this.state.accessToken,
    //     androidClientId: AppConstants.ANDROID_CLIENT_ID
    //   });
    //   if (result.status === 200) {
    //     this.setState(
    //       {
    //         accessToken: null
    //       },
    //       () => console.log("logged out successfully")
    //     );
    //   } else {
    //     // return { cancelled: true };
    //     console.log("user cancelled");
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState(
          {
            accessToken: null
          }
          // () => console.log("logged out successfully")
        );
      });
  };

  render() {
    const { loggingIn } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.primaryThemeColor
        }}
      >
        <View style={styles.welcomeTextArea}>
          <Text style={styles.welcomeText}>Welcome to</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image
              style={{ flex: 1, width: null, height: null }}
              resizeMode="contain"
              source={Images.logowithname}
            />
          </View>
        </View>
        <View style={styles.footerArea}>
          <Text
            style={{
              color: Colors.secondaryColor,
              fontFamily: "Lato-Italic",
              fontSize: 22,
              textAlign: "center"
            }}
          >
            Sign In To Get Personalized Notifications
            <Feather
              name="bell"
              style={{
                color: Colors.secondaryColor,
                fontSize: 22,
                marginHorizontal: 20
              }}
            />
          </Text>
          <TouchableOpacity
            onPress={this.signInWithGoogleAsync}
            style={{
              marginTop: 10
            }}
          >
            <Image
              source={Images.googleSignIn}
              style={{ width: 80, height: 80 }}
            />
          </TouchableOpacity>
        </View>
        {loggingIn && <Loader screen={AppConstants.LOGIN} />}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(setUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
  welcomeTextArea: {
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 40,
    color: Colors.secondaryColor,
    paddingTop: Expo.Constants.statusBarHeight,
    fontFamily: "Lato-BoldItalic"
  },
  imageContainer: {},
  image: {
    width: width,
    height: 100
  },
  footerArea: {
    alignItems: "center"
  }
});
