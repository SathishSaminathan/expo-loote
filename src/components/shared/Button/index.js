import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { WebBrowser } from "expo";
import Colors from "../../../constants/ThemeConstants";

const Button = props => {
  return (
    <Text
      style={styles.buttonStyle}
      onPress={() => WebBrowser.openBrowserAsync(props.link)}
    >
      Buy Now
    </Text>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 9,
    borderWidth: 2,
    borderColor: Colors.primaryDarkThemeColor,
    color: Colors.primaryDarkThemeColor,
    borderRadius: 5
  }
});
