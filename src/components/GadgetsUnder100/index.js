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

export default class GadgetsUnder100 extends Component {
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
            marginTop: 10,
            borderRadius: 5,
            padding: 5
          }}
          key={i}
        >
          <View
            style={{
              width: "100%",
              height: "95%",
              position: "relative"
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
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
                Amazon
              </Text>
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
            <Image
              source={{ uri: data.image }}
              style={{ flex: 1, width: null, height: null }}
              resizeMode="cover"
            />
            <View>
              <Text
                style={{ color: Colors.grey, paddingBottom: 4 }}
                numberOfLines={2}
              >
                {data.name}
              </Text>
              <PriceTag price={data.price} />
            </View>
          </View>
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
        <Header {...this.props} screen={AppConstants.GADGETS_UNDER_100} />
        <View
          style={{ padding: 10, paddingBottom: Constants.statusBarHeight * 4 }}
        >
          <LinearGradient
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
            colors={["#f74e7f", "#f74e7f", "#f74e7f", "#f87b48", "#f87b48"]}
            style={{
              borderRadius: 10,
              elevation: 10,
              paddingHorizontal: 10
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
