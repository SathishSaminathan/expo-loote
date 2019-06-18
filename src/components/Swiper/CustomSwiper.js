import React, { Component } from "react";
import {
  Image,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import Swiper from "react-native-swiper";

import Images from "../../assets/images/images";
import Colors from "../../constants/ThemeConstants";

const swiperData = [
  {
    image: Images.swiper1,
    link: "https://amzn.to/2XLzfCg"
  },
  {
    image: Images.swiper2,
    link: "https://amzn.to/2IkUIwB"
  }
];

export default class CustomSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displaySwiper = () => {
    let swiperTamplate = [];
    swiperData.map((data,i) => {
      swiperTamplate.push(
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL(data.link)}
          style={{ flex: 1 }}
          key={i}
        >
          <Image
            source={data.image}
            style={{ flex: 1, height: null, width: null }}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
      );
    });

    return swiperTamplate;
  };

  render() {
    return (
      <Swiper
        style={{ flex: 1, backgroundColor: "red" }}
        autoplay={true}
        showsPagination
        dotColor={Colors.primaryThemeColor}
        activeDotColor={Colors.secondaryColor}
      >
        {this.displaySwiper()}
      </Swiper>
    );
  }
}
