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

import Images from "./src/assets/images/images";
import Colors from "./src/constants/ThemeConstants";
import CustomSwiper from "./src/components/Swiper/CustomSwiper";
import Header from "./src/components/Header/Header";
import Loader from "./src/components/Loader/Loader";
import Home from "./src/screens/Home";
import AppDrawerContainer from "./src/navigations/AppDrawerNavigator";

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.primaryLightThemeColor}
          showHideTransition="fade"
        /> */}
        <AppDrawerContainer/>
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
