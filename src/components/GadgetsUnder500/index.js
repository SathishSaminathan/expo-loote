import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  RefreshControl
} from "react-native";
import { LinearGradient, Constants } from "expo";
import { Feather } from "@expo/vector-icons";

import StatusBar from "../StatusBar/StatusBar";
import Colors from "../../constants/ThemeConstants";

import ShareComponent from "../ShareComponent";
import AppConstants from "../../constants/AppConstants";
import Header from "../Header/Header";
import PriceTag from "../shared/PriceTag";
import BrandTag from "../shared/BrandTag";

const { width, height } = Dimensions.get("window");

const PRODUCT_CARD_WIDTH = width / 2 - 30;
const PRODUCT_CARD_HEIGHT = 200;

const DealsOfTheDayData = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71yomw7uPmL._SX679_.jpg",
    name:
      "Tamatina Pub G Laptop Skins for 15.6 inch Laptop - HD Quality - Dell-Lenovo-HP-Acer - LP1",
    link: "https://amzn.to/2INiHU2",
    price: "₹ 249.00"
  }
];

export default class GadgetsUnder500 extends Component {
  _shareComponent = new ShareComponent();

  state = {
    refreshing: false
  };

  onShare = link => {
    this._shareComponent.shareFuntion(link);
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 5000);
  };

  renderProducts = () => {
    let productTemplate = [];
    DealsOfTheDayData.map((data, i) => {
      productTemplate.push(
        <TouchableOpacity
          activeOpacity={1}
          //   onPress={() => this.props.navigation.push("ProductDetails")}
          style={{
            width: PRODUCT_CARD_WIDTH,
            height: PRODUCT_CARD_HEIGHT,
            backgroundColor: Colors.white,
            marginVertical: 10,
            borderRadius: 5,
            overflow: "hidden"
          }}
          key={i}
        >
          <View
            style={{
              width: "100%",
              // height: "95%",
              position: "relative",
              padding: 5
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <BrandTag brand="Amazon" />
              <TouchableOpacity onPress={() => this.onShare(data.link)}>
                <Feather
                  style={{
                    color: Colors.primaryDarkThemeColor,
                    fontSize: 20
                  }}
                  name="share-2"
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 100,
                  height: 100
                }}
              >
                <Image
                  source={{ uri: data.image }}
                  style={{ flex: 1, width: null, height: null }}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View>
              <Text
                style={{ color: Colors.grey, fontSize: 10 }}
                numberOfLines={2}
              >
                {data.name}
              </Text>
              <PriceTag price={data.price} />
            </View>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              // borderTopWidth: 1,
              backgroundColor: Colors.primaryDarkThemeColor,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Feather
              color={Colors.white}
              name="heart"
              style={{ fontSize: 13 }}
            />
            <Text style={{ textAlign: "center", color: Colors.white, fontSize:13, paddingLeft:5 }}>
              Add to wishlist
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    });

    return productTemplate;
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar />
        <Header {...this.props} screen={AppConstants.GADGETS_UNDER_500} />
        <View
          style={{ padding: 10, paddingBottom: Constants.statusBarHeight * 4 }}
        >
          <LinearGradient
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
            colors={[
              Colors.primaryThemeColor,
              Colors.primaryThemeColor,
              Colors.primaryThemeColor,
              Colors.secondaryColor,
              Colors.secondaryColor
            ]}
            style={{
              borderRadius: 10,
              elevation: 10,
              paddingHorizontal: 10,
              paddingVertical: 5
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 5,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                  colors={[
                    Colors.primaryDarkThemeColor,
                    Colors.secondaryColor,
                    Colors.like
                  ]}
                />
              }
            >
              {this.renderProducts()}
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
