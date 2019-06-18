import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/ThemeConstants";
import Images from "../../assets/images/images";
import AppConstants from "../../constants/AppConstants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getHeaderOptions = screen => {
    switch (screen) {
      case AppConstants.HOME:
        return (
          <>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Feather style={styles.iconStyle} name="menu" />
            </TouchableOpacity>
            <Image source={Images.logo} style={{ height: 50, width: 50 }} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Feather style={styles.iconStyle} name="bell" />
            </TouchableOpacity>
          </>
        );
      case AppConstants.NOTIFICATION:
        return (
          <>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Feather style={styles.iconStyle} name="arrow-left" />
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.secondaryColor,
                fontFamily: "Lato-BoldItalic",
                fontSize: 20
              }}
            >
              Notification
            </Text>
            <View />
          </>
        );
    }
  };

  render() {
    const { screen } = this.props;
    const HeaderOptions = this.getHeaderOptions(screen);

    return <View style={styles.headerStyle}>{HeaderOptions}</View>;
  }
}

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    backgroundColor: Colors.primaryThemeColor,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconStyle: {
    color: Colors.white,
    fontSize: 25
  }
});
