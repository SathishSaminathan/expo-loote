import React, { Component } from "react";
import { View, Text } from "react-native";
import CameraComponent from "../../components/Camera/Camera";

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraComponent {...this.props}/>
      </View>
    );
  }
}
