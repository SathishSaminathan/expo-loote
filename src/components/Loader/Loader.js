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
      count: 6,
      sorryText: ""
    };
    this.startTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          sorryText:
            "Sorry due to poor connection the site loading slow.. Please wait"
        });
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count, sorryText } = this.state;

    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
        <View
          style={{
            // flex: 1
            alignItems: "center",
            padding: 5
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 20
            }}
          >
            Take a Deep Breathe for
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: 40
            }}
          >
            {count}sec...
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: 20, textAlign:'center'
            }}
          >
            {sorryText.length !== 0 && sorryText}
          </Text>
        </View>
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
