import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image
} from "react-native";

import firebase from "../../config/firebase";
import StatusBar from "../../components/StatusBar/StatusBar";
import AppConstants from "../../constants/AppConstants";
import Header from "../../components/Header/Header";
import Colors from "../../constants/ThemeConstants";

const { width, height } = Dimensions.get("window");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!!!"));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Header
          {...this.props}
          screen={AppConstants.PROFILE}
          title={"Profile"}
        />
        <View style={styles.imageArea}>
          <View style={styles.backgroundImage}>
            {/* <ImageBackground
              source={{
                uri:
                  "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2"
              }}
              style={[styles.img]}
              resizeMode="cover"
              blurRadius={10}
            /> */}
          </View>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2"
              }}
              style={[
                styles.img,
                {
                  borderWidth: 2,
                  borderColor: Colors.white
                }
              ]}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* <Button title="Sign Out" onPress={() => this.handleSignOut()} /> */}
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  imageArea: {
    width: width,
    height: height / 3
  },
  backgroundImage: {
    flex: 1,
    elevation: 10,
    color: Colors.white,
    borderBottomWidth: 2,
    borderColor: Colors.white
  },
  profileImage: {
    position: "absolute",
    overflow: "hidden",
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: -50,
    left: width/2 - 50,
    backgroundColor: "yellow"
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  }
});
