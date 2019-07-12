import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DangerZone } from "expo";

import like from "../../assets/lottie/like.json";
import StatusBar from "../../components/StatusBar/StatusBar";
import Header from "../../components/Header/Header";
import AppConstants from "../../constants/AppConstants";
import FloatingButton from "../../components/FLB/FloatingButton";

const { Lottie } = DangerZone;

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    animation: null,
    speed: 1
  };

  componentWillMount() {
    this._playAnimation();
  }

  _changeSpeed = speed => {
    this.setState({ speed });
  };

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimation();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _stopAnimation = () => {
    this.animation.reset();
  };

  _loadAnimation = () => {
    this.setState({ animation: like }, this._playAnimation);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Header
          {...this.props}
          screen={AppConstants.NOTIFICATION}
          title={"Notification"}
        />
        <View style={styles.container}>
          <View style={styles.animationContainer}>
            {this.state.animation && (
              <Lottie
                ref={animation => {
                  this.animation = animation;
                }}
                style={{
                  width: 400,
                  height: 400,
                  backgroundColor: "#fff"
                }}
                source={this.state.animation}
                speed={this.state.speed}
                loop={true}
              />
            )}
            <View>
              <Button
                title="Wash the veggies"
                color="#4caf50"
                onPress={this._playAnimation}
              />
              <View style={styles.margin} />
              <Button
                title="Stop washing"
                color="#4caf50"
                onPress={this._stopAnimation}
              />
              <View style={styles.margin} />
              <View style={styles.speedBtnContainer}>
                <Button
                  title="Slow"
                  color="#4caf50"
                  onPress={() => this._changeSpeed(0.5)}
                />
                <View style={styles.marginRight} />
                <Button
                  title="Normal"
                  color="#4caf50"
                  onPress={() => this._changeSpeed(1)}
                />
                <View style={styles.marginRight} />
                <Button
                  title="Fast"
                  color="#4caf50"
                  onPress={() => this._changeSpeed(1.5)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  speedBtnContainer: {
    flexDirection: "row"
  },
  margin: {
    height: 10
  },
  marginRight: {
    width: 5
  }
});
