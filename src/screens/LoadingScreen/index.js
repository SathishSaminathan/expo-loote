import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import Colors from "../../constants/ThemeConstants";
import Images from "../../assets/images/images";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryThemeColor
  }
});
