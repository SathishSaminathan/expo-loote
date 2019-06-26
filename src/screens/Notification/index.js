import React, { Component } from "react";
import { View, Text } from "react-native";
import StatusBar from "../../components/StatusBar/StatusBar";
import Header from "../../components/Header/Header";
import AppConstants from "../../constants/AppConstants";
import FloatingButton from "../../components/FLB/FloatingButton";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Header
          {...this.props}
          screen={AppConstants.NOTIFICATION}
          title={"Notification"}
        />
        <Text> Notification </Text>
      </View>
    );
  }
}
