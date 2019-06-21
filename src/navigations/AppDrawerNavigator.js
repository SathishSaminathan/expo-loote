import React from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { SafeAreaView, ScrollView, Dimensions, View } from "react-native";
import { Constants } from "expo";

import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Colors from "../constants/ThemeConstants";
import StatusBar from "../components/StatusBar/StatusBar";
import ProductDetails from "../screens/ProductDetails";
import WebViewPage from "../screens/WebViewPage";

const { width, height } = Dimensions.get("window");

const CustomDrawerItems = props => (
  <SafeAreaView
    style={{
      flex: 1
    }}
  >
    <StatusBar />
    <View
      style={{
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryThemeColor
      }}
    >
      {/* <Image
        source={Images.drawerImage}
        resizeMode="cover"
        style={{
          width: 200,
          height: 200
        }}
      /> */}
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const stackNavigations = createStackNavigator(
  {
    Home: Home,
    ProductDetails: ProductDetails,
    WebViewPage: WebViewPage
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: stackNavigations,
    Notification: Notification
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerItems,
    contentOptions: {
      activeTintColor: Colors.primaryThemeColor,
      activeBackgroundColor: Colors.white,
      inactiveBackgroundColor: Colors.white
      // activeLabelStyle:{fontSize:20,color:Colors.themeBlue},
    }
  }
);

const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

export default AppDrawerContainer;
