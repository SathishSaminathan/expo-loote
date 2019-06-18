import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from "react-native";
import Colors from "../../constants/ThemeConstants";

const { width, height } = Dimensions.get("window");

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
        <Text
          style={{
            color: Colors.white,
            fontSize: 20
          }}
        >
          Take a Deep Breathe...
        </Text>
      </View>
    );
  }
}
export default Loader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    height:height,
    alignItems: "center",
    justifyContent: "center"
  }
});
