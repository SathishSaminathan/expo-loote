import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { Feather } from "@expo/vector-icons";

import StatusBar from "../../components/StatusBar/StatusBar";
import Colors from "../../constants/ThemeConstants";
import { Constants, WebBrowser } from "expo";
import { Snackbar } from "react-native-paper";
import Button from "../../components/shared/Button";
import AppConstants from "../../constants/AppConstants";
import Header from "../../components/Header/Header";

const { width, height } = Dimensions.get("window");

const SavedItemsData = [
  {
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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
    image: "https://www.amzerwireless.com/gallery/204388-1.jpg",
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

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SavedItemsData: SavedItemsData,
      visible: false
    };
  }

  removeItem = id => {
    let data = this.state.SavedItemsData;
    let SavedItemsData = data.splice(id, 1);
    this.setState(
      {
        SavedItemsData: data
      },
      () => this.showSnack()
    );
  };

  showSnack = () => {
    this.setState({
      visible: true
    });
  };

  renderList = () => {
    const { SavedItemsData } = this.state;
    let listTemplate = [];
    SavedItemsData.map((item, i) => {
      listTemplate.push(
        <View
          style={[
            styles.wishListCardContainer
            // i % 2 == 0 && { paddingRight: 0 }
          ]}
          key={i}
        >
          <View style={styles.wishlistCard}>
            <View
              style={{
                width: "100%",
                height: "60%",
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%"
                }}
              >
                <Image
                  style={{ width: null, height: null, flex: 1 }}
                  resizeMode="contain"
                  source={{ uri: item.image }}
                />
              </View>
            </View>
            <View
              style={{
                height: "40%"
              }}
            >
              <View style={styles.titleArea}>
                <Text style={{ color: Colors.grey }} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.priceArea}>
                <Text>
                  {item.price}
                  <Text
                    style={{
                      fontSize: 8,
                      color: Colors.like,
                      paddingBottom: 2
                    }}
                  >
                    at the time of upload
                  </Text>
                </Text>
              </View>
              <View style={styles.buyNowArea}>
                <Button link={item.link} />
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center"
                  }}
                  onPress={() =>
                    Alert.alert(
                      "Confirmation",
                      "Are you sure want to remove this item from your list?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => this.removeItem(i) }
                      ],
                      { cancelable: false }
                    )
                  }
                >
                  <Feather
                    color={Colors.red}
                    name="trash"
                    style={{ fontSize: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    });

    return listTemplate;
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          {...this.props}
          screen={AppConstants.WISHLIST}
          title={AppConstants.WISHLIST}
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.renderList()}
        </ScrollView>
        <Snackbar
          visible={visible}
          onDismiss={() => this.setState({ visible: false })}
          duration={2000}
          // action={{
          //   label: "Undo",
          //   onPress: () => {
          //     // Do something
          //   }
          // }}
        >
          You have successfully removed the Item.
        </Snackbar>
      </View>
    );
  }
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 5
  },
  wishListCardContainer: {
    height: height / 2.5,
    width: width / 2
    // padding: 1,
  },
  wishlistCard: {
    width: "99%",
    height: "99%",
    backgroundColor: Colors.white,
    elevation: 1,
    margin: 1,
    // borderWidth: 1,
    // borderColor: Colors.grey,
    paddingBottom: 10
  },
  titleArea: {
    color: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10
  },
  priceArea: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  buyNowArea: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
});
