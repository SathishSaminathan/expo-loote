import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import * as Expo from "expo";

import firebase from "../../../config/firebase";
import AppConstants from "../../../constants/AppConstants";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      name: "",
      image: null,
      userRef: firebase.database().ref("users")
    };
  }

  onSignIn = googleUser => {
    console.log("Google Auth Response", googleUser);
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
              console.log("result.....", res);
              if (res.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + res.user.uid)
                  .set({
                    gmail: res.user.email,
                    profile_picture: res.additionalUserInfo.profile.picture,
                    locale: res.additionalUserInfo.profile.locale,
                    first_name: res.additionalUserInfo.profile.given_name,
                    last_name: res.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(() => {
                    console.log("user created!!!");
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                firebase
                  .database()
                  .ref("/users/" + res.user.uid)
                  .update({
                    last_loggedIn: Date.now()
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
      const result = await Expo.Google.logInAsync({
        behavior: "web",
        androidClientId: AppConstants.ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.setState(
          {
            accessToken: result.accessToken,
            name: result.user.name,
            image: result.user.photoUrl
          },
          () => {
            this.onSignIn(result);
          }
        );
      } else {
        // return { cancelled: true };
        console.log("user cancelled");
      }
    } catch (e) {
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
    const { accessToken, name, image } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* {accessToken && (
          <>
            <Text>{name}</Text>
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50
              }}
            />
          </>
        )} */}
        <Button
          title={"Sign In"}
          onPress={() => this.signInWithGoogleAsync()}
        />
      </View>
    );
  }
}
