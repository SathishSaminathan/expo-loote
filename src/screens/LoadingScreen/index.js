import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { connect } from "react-redux";

import firebase from "../../../src/config/firebase";
import Colors from "../../constants/ThemeConstants";
import Images from "../../assets/images/images";
import { setUser } from "../../store/actions";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let userData = {
          gmail: user.email,
          profile_picture: user.photoURL,
          uid: user.uid,
          displayName: user.displayName,
          created_at: Date.now()
        };
        console.log("user ");
        this.props.userLoaded(userData, 'checked');
        this.props.createUser(userData);
      } else {
        console.log("no user !!! :");
        this.props.userLoaded(null, 'checked');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={{ width: 100, height: 100 }} />
        <ActivityIndicator color={Colors.secondaryColor} size="large" />
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
)(LoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryThemeColor
  }
});
