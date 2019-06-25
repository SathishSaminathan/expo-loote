import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import Swipeout from "react-native-swipeout";

import Colors from "../../constants/ThemeConstants";
import Divider from "../Divider/Divider";

class SavedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SavedItems: this.props.SavedItemsData,
      
    };
  }

  removeItem = id => {
    let data = this.state.SavedItems;
    let SavedItems = data.splice(id, 1);
    this.setState({
      SavedItems: data,
    }, ()=> this.props.showSnack());
  };

  renderSavedItems = () => {
    let savedItemsTemplate = [];

    // let swipeSettings = {
    //   autoClose: true
    // };

    // let swipeoutBtns = [
    //   {
    //     backgroundColor: Colors.red,
    //     component: (
    //       <TouchableOpacity
    //         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    //         onPress={() =>
    //           Alert.alert(
    //             "Confirmation",
    //             "Are you sure want to remove this item from your list?",
    //             [
    //               {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //               },
    //               { text: "OK", onPress: () => console.log("OK Pressed") }
    //             ],
    //             { cancelable: false }
    //           )
    //         }
    //       >
    //         <Feather
    //           name="trash"
    //           style={{ color: Colors.white, fontSize: 20 }}
    //         />
    //       </TouchableOpacity>
    //     )
    //   }
    // ];

    this.state.SavedItems &&
      this.state.SavedItems.map((item, i) => {
        savedItemsTemplate.push(
          //   <Swipeout
          //     {...swipeSettings}
          //     key={i}
          //     backgroundColor={Colors.white}
          //     right={swipeoutBtns}
          //   >
          <TouchableOpacity
            activeOpacity={1}
            key={i}
            onPress={() => this.props.navigation.navigate("ProductDetails")}
          >
            <View
              style={{
                width: "100%",
                height: 100,
                marginVertical: 5,
                borderRadius: 10,
                alignItems: "center",
                padding: 10,
                flexDirection: "row"
              }}
            >
              <View style={{ height: 80, width: 80, backgroundColor: "red" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ flex: 1, width: null, height: null }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ flex: 3, padding: 3 }}>
                <Text
                  numberOfLines={3}
                  style={{ fontFamily: "Lato-Bold", fontSize: 15 }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity
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
                    name="trash"
                    style={{ color: Colors.red, fontSize: 20 }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 15,
                    color: Colors.primaryThemeColor
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
            <Divider />
          </TouchableOpacity>
          //   </Swipeout>
        );
      });
    return savedItemsTemplate;
  };

  render() {
    return (
      <View>
        {this.renderSavedItems()}
      </View>
    );
  }
}
export default SavedItems;
