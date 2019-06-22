import React, { Component } from "react";
import { WebView, View, Text } from "react-native";
import { Constants } from "expo";
import Colors from "../../constants/ThemeConstants";
import Loader from "../../components/Loader/Loader";

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const url = "https://amzn.to/2RwDtvg";
    const { loading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {!loading && (
          <View
            style={{
              height: Constants.statusBarHeight,
              backgroundColor: Colors.primaryThemeColor
            }}
          />
        )}
        {loading && <Loader />}
        <WebView
          source={{
            uri: url
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          onLoadStart={() => this.setState({ loading: true })}
          onLoad={() => this.setState({ loading: false })}
          onLoadEnd={() => this.setState({ loading: false })}
          //   scalesPageToFit
          javaScriptEnabled
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
