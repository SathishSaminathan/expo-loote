import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  Dimensions,
  RefreshControl
} from "react-native";
import { Constants, Font, LinearGradient } from "expo";

import Colors from "../../constants/ThemeConstants";
import Header from "../../components/Header/Header";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import FloatingButton from "../../components/FLB/FloatingButton";
import DealsOfTheDay from "../../components/DealsOfTheDay/DealsOfTheDay";
import PickedForYou from "../../components/PickedForYou/PickedForYou";
import StatusBar from "../../components/StatusBar/StatusBar";
import AppConstants from "../../constants/AppConstants";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fab: false,
      fontLoaded: false
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

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  };

  scrollToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true, fab: false });
  };

  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y === 0) {
      this.setState({ fab: false });
    } else {
      this.setState({
        fab: true
      });
    }
  };

  render() {
    const { fab, fontLoaded } = this.state;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar />
        <Header {...this.props} screen={AppConstants.HOME} />
        <View style={styles.MainContainer}>
          <ScrollView
            onScroll={this.handleScroll}
            onMomentumScrollEnd={this.handleScroll}
            ref={scroll => (this.scroll = scroll)}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            <View
              style={{
                height: 100
              }}
            >
              <CustomSwiper />
            </View>
            <DealsOfTheDay fontLoaded={fontLoaded} />
            <PickedForYou fontLoaded={fontLoaded} />
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
