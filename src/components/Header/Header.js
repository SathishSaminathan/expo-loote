import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/ThemeConstants";
import Images from "../../assets/images/images";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        <Feather style={styles.iconStyle} name="menu" />
        <Image source={Images.logo} style={{ height:50, width:50}}/>
        <Feather style={styles.iconStyle} name="bell" />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    backgroundColor: Colors.primaryThemeColor,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle:{
      color:Colors.white,
      fontSize: 25,
  }
});
