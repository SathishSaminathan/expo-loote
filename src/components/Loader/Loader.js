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
    this.state = {
      count: 10
    };
    this.startTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;

    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
        <Text
          style={{
            color: Colors.white,
            fontSize: 20
          }}
        >
          Take a Deep Breathe for
          <Text
            style={{
              color: Colors.white,
              fontSize: 40,flex:1,
              flexDirection: "column"
            }}
          >
            {count}sec...
          </Text>
        </Text>
      </View>
    );
  }
}
export default Loader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    height: height,
    position: "absolute",
    width: width,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    flex: 1
  }
});
