import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class ConfirmComponent extends React.Component {
  _goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <LinearGradient
        colors={['#434343', '#000000']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <View style={{ marginBottom: 30 }}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={66}
              color="#FFF"
            />
          </View>

          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', paddingBottom: 20, }}>
            Your order is in queue successfully
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ paddingVertical: 20, width: 140 }}>
            <LinearGradient
              colors={['#E0EAFC', '#CFDEF3']}
              style={{
                padding: 15,
                alignItems: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                paddingVertical: 20,
              }}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 0.0, x: 1.0 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  fontWeight: '500',
                }}>
                Continue
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#363795',
  },
});
