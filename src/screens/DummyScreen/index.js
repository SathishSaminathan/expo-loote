import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import AppDrawerContainer from "../../../src/navigations/AppDrawerNavigator";

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return <AppDrawerContainer screenProps={user} />;
  }
}

const mapStateToProps= ({user})=>{
    return{
        user:user.current_user
    }
}

export default connect(
  mapStateToProps,
  null
)(Dummy);
