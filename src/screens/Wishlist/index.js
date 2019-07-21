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
import { Constants } from "expo";
import { Snackbar } from "react-native-paper";

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
            styles.wishListCardContainer,
            i % 2 == 0 && { paddingRight: 0 }
          ]}
          key={i}
        >
          <View style={styles.wishlistCard}>
            <View style={{ width: "100%", height: "80%" }}>
              <Image
                style={{ width: null, height: null, flex: 1 }}
                resizeMode="contain"
                source={{ uri: item.image }}
              />
            </View>
            <TouchableOpacity
              style={{ alignItems: "center" }}
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
      );
    });

    return listTemplate;
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            backgroundColor: Colors.white,
            textAlign: "center",
            fontSize: 20,
            paddingVertical: 10,
            fontSize: 20,
            fontFamily: "Lato-BoldItalic",
            textDecorationLine: "underline"
          }}
        >
          Your Wishlist
        </Text>
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
        {/* <View style={styles.wishListCard}>
          <View
            style={{
              backgroundColor: "red",
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View style={styles.wishListCard} /> */}
      </View>
    );
  }
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  wishListCardContainer: {
    height: height / 3,
    width: width / 2,
    // backgroundColor: Colors.red,
    padding: 1,
    paddingBottom: 0,
    elevation: 10
  },
  wishlistCard: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white
  }
});
