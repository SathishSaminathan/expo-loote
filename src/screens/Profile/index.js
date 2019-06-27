import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Snackbar, ProgressBar } from "react-native-paper";
import { connect } from "react-redux";

import firebase from "../../config/firebase";
import StatusBar from "../../components/StatusBar/StatusBar";
import AppConstants from "../../constants/AppConstants";
import Header from "../../components/Header/Header";
import Colors from "../../constants/ThemeConstants";
import SavedItems from "../../components/SavedItems/SavedItems";
import Divider from "../../components/Divider/Divider";
import ImagePickerComponent from "../../components/ImagePicker/ImagePicker";
import { setUser, updateUser } from "../../store/actions";

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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      ImageURI: null,
      storageRef: firebase.storage().ref("user_images"),
      progress: 0,
      user: this.props.user
    };
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!!!"));
  };

  showSnack = () => {
    this.setState({
      visible: true
    });
  };

  getImageURI = async ImageURI => {
    const { storageRef } = this.state;
    const response = await fetch(ImageURI);
    const blob = await response.blob();

    console.log("blob", blob);
    if (blob) {
      const uploadImage = storageRef.child("1").put(blob);
      uploadImage.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          this.setState(
            {
              progress: parseFloat(progress / 100)
            },
            () => console.log(this.state.progress)
          );
        },
        err => {
          console.log(err);
        },
        completed => {
          storageRef
            .child("1")
            .getDownloadURL()
            .then(url => {
              console.log(url);
              let user = { ...this.state.user, profile_picture: url };
              console.log("current user", firebase.auth().currentUser);
              firebase
                .auth()
                .currentUser.updateProfile({
                  photoURL: url
                })
                .then(() => {
                  console.log("profile updated successfully");
                });
              this.props.updateUser(user);
              this.setState(
                {
                  ImageURI,
                  progress: 0
                },
                () => console.log(ImageURI)
              );
            });
        }
      );
    }
  };

  render() {
    const { ImageURI, progress } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Header
          {...this.props}
          screen={AppConstants.PROFILE}
          title={"Profile"}
        />
        {progress > 0 && (
          <ProgressBar
            animating
            styleAttr="Horizontal"
            style={{
              backgroundColor: Colors.transparent,
              height: 0,
              position: "absolute",
              top: Constants.statusBarHeight + 48,
              left: 0,
              right: 0
            }}
            progress={progress}
            color={Colors.secondaryColor}
          />
        )}
        <ScrollView contentContainerStyle={{}}>
          <View style={styles.imageArea}>
            <View style={styles.backgroundImage}>
              <ImageBackground
                source={{
                  uri: this.props.user.profile_picture
                }}
                style={[styles.img]}
                resizeMode="cover"
                blurRadius={10}
              />
            </View>
            <View>
              <View style={styles.profileImage}>
                <Image
                  source={{
                    uri: this.props.user.profile_picture
                  }}
                  style={[styles.img]}
                  resizeMode="cover"
                />
              </View>
              <ImagePickerComponent getImageURI={this.getImageURI} />
            </View>
          </View>
          <View style={styles.userDetailsArea}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="user"
                style={{ fontSize: 20, color: Colors.primaryThemeColor }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Lato-BoldItalic",
                  paddingLeft: 10
                }}
              >
                {this.props.user.displayName}
              </Text>
            </View>
          </View>
          <Divider />
          <View style={styles.savedItemsArea}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "Lato-BoldItalic", fontSize: 20 }}>
                  Saved Items
                </Text>
                <Feather
                  name="heart"
                  style={{
                    fontSize: 20,
                    marginLeft: 10,
                    color: Colors.red
                  }}
                />
              </View>
              <View
                style={{
                  paddingLeft: 10,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Lato-BoldItalic",
                    fontSize: 10,
                    color: Colors.red
                  }}
                >
                  (Press
                  <Feather
                    name="trash"
                    style={{ color: Colors.red, fontSize: 15 }}
                  />
                  <Text> Icon to remove the Products)</Text>
                </Text>
              </View>
            </View>
            <SavedItems
              showSnack={() => this.showSnack()}
              {...this.props}
              SavedItemsData={SavedItemsData}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.handleSignOut()}
            style={{
              height: 50,
              width: "100%",
              backgroundColor: Colors.primaryThemeColor,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: Colors.secondaryColor,
                fontFamily: "Lato-Italic"
              }}
            >
              Sign Out
            </Text>
            <Feather
              name="log-out"
              style={{
                fontSize: 20,
                color: Colors.secondaryColor,
                marginLeft: 5
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        <Snackbar
          visible={this.state.visible}
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

const mapStateToProps = ({ user }) => {
  return {
    user: user.current_user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

const styles = StyleSheet.create({
  imageArea: {
    width: width,
    height: height / 3
  },
  backgroundImage: {
    flex: 1,
    // elevation: 10,
    backgroundColor: Colors.black
  },
  profileImage: {
    position: "absolute",
    overflow: "hidden",
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: -50,
    left: width / 2 - 50,
    // backgroundColor: "yellow",
    borderWidth: 3,
    borderColor: Colors.white
    // elevation: 5
  },
  img: {
    flex: 1,
    width: null,
    height: null
  },
  savedItemsArea: {
    flex: 1,
    padding: 10,
    paddingTop: 30
  },
  userDetailsArea: {
    padding: 10,
    paddingTop: 60
  }
});
