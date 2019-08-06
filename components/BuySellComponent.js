import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class BuySellComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '9800',
      profile: {
        client_code: '2209078',
        name: 'MD FARHAN ASIF',
        email: 'testuser@yahoo.com',
        mobile: '01878933100',
        bank_name: 'DUTCH-BANGLA BANK LTD',
        branch_name: 'MOTIJHEEL FOREIGN EXCHANGE',
        account_no: '105.103.15790',
        image: 'http://uftcl.com/custom_files/user/',
        cash_limit: '3,460.00',
      },
      error: null,
      cash_limit: '3,460.00',
      request: 'Buy',
      current_rate: 45.6,
      order_rate: 45.6,
      shares: '10',
    };

    this.arrayholder = [];
  }

  _goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{padding: 12, backgroundColor: '#FFF',}}>
          <TouchableOpacity onPress={this._goBack}>
            <Ionicons name="ios-close" size={34} color="#424949" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.paragraph}>
                <View style={{paddingBottom: 20}}>
                <Ionicons name="ios-apps" size={44} color="#363795" />
                </View>
                
                <Text style={styles.header}>Buy ABBANK shares</Text>
                <Text style={styles.subheader}>Step 1 of 2</Text>
            </View>
            <View style={styles.simpleBorder} />
            <View style={styles.orderView}>
              <Text style={styles.orderText}>7th August, 2019</Text>
              <Text style={styles.orderText}>Instrument Order - Buy</Text>
              <View style={styles.boView}>
                <View>
                  <Text style={styles.boViewTextHead}>1283712983123</Text>
                  <Text style={styles.boViewTextSub}>BO Account</Text>
                </View>
                <View>
                  <Text style={styles.boViewTextHead}>
                    {this.state.current_rate.toFixed(2)}
                  </Text>
                  <Text style={styles.boViewTextSub}>Current Rate</Text>
                </View>
              </View>
            </View>
            <View style={styles.simpleBorder} />
            <View style={styles.nosView}>
              <Text style={{ marginTop: 18, fontSize: 16 }}>No of Shares </Text>
              <TextInput
                style={{
                  height: 58,
                  width: 40,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
                onChangeText={shares => this.setState({ shares })}
                value={this.state.shares}
                keyboardType="number-pad"
                place
              />
              <Text style={{ marginTop: 18, fontSize: 13, color: '#424949' }}>
                ={' '}
                {`${(this.state.current_rate * this.state.shares).toFixed(2)}`}{' '}
                BDT
              </Text>
            </View>
            <View style={styles.simpleBorder} />
            <View style={styles.nosView}>
              <Ionicons
                name="md-stopwatch"
                size={18}
                color="#424949"
                style={{ marginTop: 12 }}
              />
              <Text style={{ marginTop: 10, fontSize: 14 }}>
                Order Rate (optional){' '}
              </Text>
              <TextInput
                style={{
                  height: 40,
                  width: 100,
                  fontSize: 19,
                  fontWeight: '600',
                  paddingLeft: 20,
                }}
                onChangeText={order_rate => this.setState({ order_rate })}
                value={`${this.state.order_rate.toFixed(2)}`}
                keyboardType="number-pad"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 10,
              }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm')}>
              <LinearGradient
                colors={['#005C97', '#363795']}
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
                }}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 0.0, x: 1.0 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                  }}>
                  Process Order
                </Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
    backgroundColor: '#FFF',
  },
  paragraph: {
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  subheader: {
    fontSize: 13,
    fontWeight: '100',
    textAlign: 'center',
    paddingVertical: 1,
    color: '#566573',
  },
  simpleBorder: {
    borderBottomColor: '#D5D8DC',
    borderBottomWidth: 1,
    paddingVertical: 4
  },
  orderView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  orderText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#424949',
  },
  boView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
  },
  boViewTextHead: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boViewTextSub: {
    fontSize: 14,
    color: '#424949',
  },
  nosView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});
