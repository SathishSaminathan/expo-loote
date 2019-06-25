import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/ThemeConstants";

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
  }

  handleOnPress = () => {
    this.props.scroll();
  };

  animateTheButton = showButton => {
    if (showButton) {
      Animated.spring(this.animated, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
        friction: 100,
        tension: 100
      }).start();
    } else {
      Animated.spring(this.animated, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        friction: 100,
        tension: 100
      }).start();
    }
  };

  render() {
    this.animateTheButton(this.props.buttonShow);

    const translateY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    });

    return (
      <Animated.View>
        <TouchableOpacity
          onPress={this.handleOnPress}
          style={[styles.buttonStyles, { translateY }]}
        >
          <Feather name="arrow-up" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default FloatingButton;

const styles = StyleSheet.create({
  buttonStyles: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.secondaryColor
  }
});
