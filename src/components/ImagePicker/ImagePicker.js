import React, { Component } from "react";
import { Button, Image, View, TouchableOpacity, Dimensions } from "react-native";
import { ImagePicker, Permissions, Constants } from "expo";
import {  Feather } from "@expo/vector-icons";
import { Colors } from "react-native-paper";

const { width, height } = Dimensions.get('window')

export default class ImagePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri },()=> this.props.getImageURI(this.state.image));
    }
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: 30,
          height: 30,
          backgroundColor: Colors.white,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          bottom: -40,
          left: width / 2 + 20,
          elevation: 5
        }}
        onPress={this._pickImage}
      >
        <Feather name="camera" style={{ fontSize: 15, color: Colors.black }} />
      </TouchableOpacity>
    );
  }
}
