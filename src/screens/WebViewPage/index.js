import React, { Component } from "react";
import { WebView, View } from "react-native";
import { Constants } from "expo";
import Colors from "../../constants/ThemeConstants";

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const url = "https://amzn.to/2INiHU2";
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: Colors.primaryThemeColor
          }}
        />
        <WebView
          source={{
            uri: url
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          //   startInLoadingState
          //   scalesPageToFit
          javaScriptEnabled
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
