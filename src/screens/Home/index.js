import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Constants, Font, LinearGradient } from "expo";

import Colors from "../../constants/ThemeConstants";
import Header from "../../components/Header/Header";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import FloatingButton from "../../components/FLB/FloatingButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fontLoaded: false,
      fab: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Lato-Regular": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Bold": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Italic": require("../../assets/fonts/Lato/Lato-Italic.ttf"),
      "Lato-BoldItalic": require("../../assets/fonts/Lato/Lato-BoldItalic.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  scrollToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true, fab: false });
  };

  handleScroll = event => {
    console.log(event.nativeEvent.contentOffset.y);
    if (event.nativeEvent.contentOffset.y === 0) {
      this.setState({ fab: false });
    } else {
      this.setState({
        fab: true
      });
    }
  };

  render() {
    const { fab } = this.state;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: Colors.primaryDarkThemeColor
          }}
        />
        <Header />
        <View style={styles.MainContainer}>
          <ScrollView
            onScroll={this.handleScroll}
            onMomentumScrollEnd={this.handleScroll}
            ref={scroll => (this.scroll = scroll)}
            contentContainerStyle={{
              height: 1000
            }}
          >
            <View
              style={{
                height: 100
              }}
            >
              <CustomSwiper />
            </View>
            <View
              style={{
                padding: 10,
                alignItems: "center"
              }}
            >
              {this.state.fontLoaded && (
                <Text style={{ fontSize: 20, fontFamily: "Lato-BoldItalic" }}>
                  Deals of the Day
                </Text>
              )}
            </View>
            <View
              style={{
                margin: 5
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                colors={["#f74e7f", "#f74e7f", "#f74e7f", "#f87b48", "#f87b48"]}
                style={{
                  height: 600,
                  borderRadius: 10,
                  elevation: 10
                }}
              />
            </View>
          </ScrollView>
          {fab && <FloatingButton scroll={this.scrollToTop} />}
        </View>
        {/* <Button
          title="Learn More"
          color="#841584"
          onPress={() => }
        /> */}
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },

  TouchableOpacityStyle: {},

  FloatingButtonStyle: {
    resizeMode: "contain"
  }
});
