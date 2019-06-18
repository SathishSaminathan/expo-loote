import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/ThemeConstants";

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnPress = () => {
    this.props.scroll()
  };

  render() {
    console.log(this.props)
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}
        style={styles.buttonStyles}
      >
        <Feather name="arrow-up" style={{ fontSize: 20 }} />
      </TouchableOpacity>
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
