import React from "react";
import { Text } from "react-native";
import Colors from "../../../constants/ThemeConstants";

const BrandTag = ({ brand }) => {
  return (
    <Text
      style={{
        color: Colors.white,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontSize: 7,
        backgroundColor: Colors.primaryDarkThemeColor
      }}
    >
      {brand}
    </Text>
  );
};

export default BrandTag;
