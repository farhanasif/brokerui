import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon name="comments" size={30} color="#900" />
        <Text>This is a test!</Text>
      </View>
    );
  }
}
