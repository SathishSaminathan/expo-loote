import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  WebView, Linking
} from "react-native";
import { Constants, WebBrowser } from "expo";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Colors from "../../constants/ThemeConstants";
import ShareComponent from "../../components/ShareComponent";

const { width, height } = Dimensions.get("window");

const HEADER_HEIGHT = 60;

class ProductDetails extends Component {
  _shareComponent = new ShareComponent();
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      menuOpened: false,
      isLiked: true
    };
  }

  onShare = link => {
    this._shareComponent.shareFuntion(link);
  };

  handleLike = () => {
    this.setState(prevState => ({ isLiked: !prevState.isLiked }));
    console.log(this.state.isLiked);
  };

  static navigationOptions = {
    drawerLabel: () => null
  };

  toggleMenu = () => {
    const { menuOpened } = this.state;
    console.log("menuOpened", menuOpened);
    if (menuOpened) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 500
      }).start();
    }
  };

  render() {
    const { menuOpened } = this.state;

    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 100]
    });

    const backgroundOpacity = this.animatedValue.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0, 0.5]
    });

    const menuOpacity = this.animatedValue.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0, 1]
    });

    const backgroundZIndex = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, 1]
    });

    return (
      <View style={styles.productDetailsContainer}>
        <View
          style={{
            top: 0,
            height: Constants.statusBarHeight,
            backgroundColor: Colors.primaryDarkThemeColor
          }}
        />
        <View
          style={{
            height: HEADER_HEIGHT,
            width: width,
            backgroundColor: Colors.primaryThemeColor,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            top: Constants.statusBarHeight,
            zIndex: 3
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Feather style={styles.iconStyle} name="arrow-left" />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.secondaryColor,
              fontFamily: "Lato-Regular",
              fontSize: 20
            }}
          >
            Product Details
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({ menuOpened: !this.state.menuOpened }, () =>
                this.toggleMenu()
              )
            }
          >
            <Feather style={styles.iconStyle} name="more-vertical" />
          </TouchableOpacity>
        </View>

        <Animated.View
          style={[
            {
              zIndex: 2,
              position: "absolute",
              height: 80,
              width: width,
              top: -20,
              left: 0,
              flex: 1,
              flexDirection: "row",
              translateY,
              opacity: menuOpacity
            }
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.menuButtons}
            onPress={() => this.onShare("https://amzn.to/2INiHU2")}
          >
            <View style={styles.itemStyles}>
              <Feather
                name="share-2"
                style={{ fontSize: 25, color: Colors.primaryThemeColor }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.menuButtons}>
            <TouchableOpacity
              style={styles.itemStyles}
              onPress={this.handleLike}
            >
              <FontAwesome
                name="heart"
                style={[
                  { fontSize: 25 },
                  this.state.isLiked
                    ? { color: Colors.like }
                    : { color: Colors.grey }
                ]}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              height: height - 80,
              width: width,
              opacity: backgroundOpacity,
              zIndex: backgroundZIndex
            }
          ]}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              menuOpened &&
                this.setState({ menuOpened: !this.state.menuOpened }, () =>
                  this.toggleMenu()
                );
            }}
          />
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingTop: HEADER_HEIGHT
          }}
        >
          <Text style={styles.productName}>
            Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality -
            Dell-Lenovo-HP-Acer - LP1
          </Text>
          <View style={{ width: "100%", height: 300 }}>
            <Image
              source={{
                uri:
                  "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg"
              }}
              style={{
                width: null,
                height: null,
                flex: 1,
                paddingHorizontal: 10
              }}
            />
          </View>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 40
              }}
            >
              $<Text style={{ color: Colors.black, fontSize: 30 }}>12</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: Colors.primaryThemeColor,
              borderRadius: 20,
              marginHorizontal: 10
            }}
            // onPress={() => this.props.navigation.push("WebViewPage")}
            onPress={()=> WebBrowser.openBrowserAsync('https://amzn.to/2INiHU2')}
          >
            <Text
              style={{ color: Colors.white, fontSize: 20, textAlign: "center" }}
            >
              See More and Buy With Amazon
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 

export default ProductDetails;

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1
  },
  menuButtons: {
    backgroundColor: "white",
    flex: 1
  },
  itemStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  iconStyle: {
    color: Colors.white,
    fontSize: 25
  },
  productName: {
    fontSize: 22,
    color: Colors.black,
    paddingHorizontal: 10,
    fontFamily: "Lato-Regular"
  }
});
