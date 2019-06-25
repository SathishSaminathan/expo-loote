import React, { Component } from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/ThemeConstants";

export default class Divider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={{ height: 1, width: "100%" , backgroundColor: Colors.primaryLightThemeColor, }} />;
  }
}
