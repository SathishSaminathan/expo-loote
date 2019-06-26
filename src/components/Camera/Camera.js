import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native-paper";
import Images from "../../assets/images/images";

export default class CameraComponent extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            flashMode={Camera.Constants.FlashMode.torch}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.black,
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 40,
                  fontFamily: "Lato-Bold",
                  color: Colors.white
                }}
              >
                Find Your Things..
              </Text>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: Colors.white,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => this.props.navigation.pop()}
              >
                <Feather
                  name="x"
                  style={{ fontSize: 50, color: Colors.white }}
                />
              </TouchableOpacity>
              <Image source={Images.logo} style={{ width: 100, height: 100 }} />
            </View>
          </Camera>
        </View>
      );
    }
  }
}
