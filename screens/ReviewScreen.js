import React, { Component } from "react";
import { View, Text, Button, Platform } from "react-native";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate("settings")}
        />
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    };
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
