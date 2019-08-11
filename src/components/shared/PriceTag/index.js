import React from "react";
import { Text } from "react-native";
import Colors from "../../../constants/ThemeConstants";

const PriceTag = ({ price }) => {
  return (
    <Text>
      {price}
      <Text
        style={{
          fontSize: 6,
          color: Colors.like,
          paddingBottom: 2
        }}
      >
        at the time of upload
      </Text>
    </Text>
  );
};

export default PriceTag;
