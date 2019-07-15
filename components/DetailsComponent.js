import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Appbar, Searchbar, List, Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

export default class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      title: '',
      loading: false,
      data: [],
      error: null,
      itemid: '',
      item: null,
    };
  }

  componentWillMount() {
    this.load();
  }

  load = async () => {
    try {
      const { navigation } = this.props;
      //await this.setState({title: navigation.getParam('trade_code', 'NO-TITLE')})
      //await this.setState({itemid: navigation.getParam('itemId', '0')})
      await this.setState({ item: navigation.getParam('item', null) });

      //this.makeRemoteRequest();
    } catch (e) {
      console.error('Failed to load token.' + e);
    }
  };

  _goBack = () => this.props.navigation.goBack();

  render() {
    const { item } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor:'#FFF' }}>
        <View>
          <Appbar.Header style={styles.bottom}>
            <Appbar.BackAction onPress={this._goBack} />
            <Appbar.Content
              title={item.MKISTAT_INSTRUMENT_CODE}
              subtitle="XYZ Company Limited"
            />
            <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 160, paddingBottom: 100, }}>
          <View style={{ backgroundColor: '#FFF' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: 10,
            }}>
            <View style={{ paddingHorizontal: 10, marginLeft: 10 }}>
              <Ionicons
                name={
                  item.MKISTAT_CLOSE_PRICE -
                    item.MKISTAT_PUB_LAST_TRADED_PRICE >
                  0
                    ? 'md-arrow-round-up'
                    : 'md-arrow-round-down'
                }
                size={30}
                color={
                  item.MKISTAT_CLOSE_PRICE -
                    item.MKISTAT_PUB_LAST_TRADED_PRICE >
                  0
                    ? 'green'
                    : 'red'
                }
              />
            </View>
            <Text style={{ fontSize: 26, fontWeight: '400' }}>
              {item.MKISTAT_PUB_LAST_TRADED_PRICE}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                color:
                  item.MKISTAT_CLOSE_PRICE -
                    item.MKISTAT_PUB_LAST_TRADED_PRICE >
                  0
                    ? 'green'
                    : 'red',
              }}>{`${(
              item.MKISTAT_CLOSE_PRICE - item.MKISTAT_PUB_LAST_TRADED_PRICE
            ).toFixed(4)} (35.78%)`}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Ionicons
              name="md-stopwatch"
              size={17}
              color="orange"
              style={{ marginLeft: 20 }}
            />
            <Text> 16/7/2019 12:30 pm | Currency in BDT</Text>
          </View>
          <View>
            <Image
              source={require('../assets/chart.png')}
              style={{ height: 240, width: width - 20, resizeMode: 'cover' }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
            }}>
            <Text style={styles.TextStyle}> Start Trading Here. </Text>
          </View>
          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>No. of Shares:</Text>
                <Text>1500000</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Paid-Up Capital (mn):</Text>
                <Text>13503</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Last AGM Date:</Text>
                <Text>22/04/2019</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Listed Since:</Text>
                <Text>2009</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Face Value:</Text>
                <Text>10 TK</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Category:</Text>
                <Text>A</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Credit Rating:</Text>
                <Text>AAA</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Contact Phone:</Text>
                <Text>990880990</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>No. of Shares:</Text>
                <Text>1500000</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Paid-Up Capital (mn):</Text>
                <Text>13503</Text>
              </View>
            </View>
          </View>

          <View style={{padding: 2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                paddingTop: 5,
              }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>No. of Shares:</Text>
                <Text>1500000</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text>Paid-Up Capital (mn):</Text>
                <Text>13503</Text>
              </View>
            </View>
          </View>
          </View>
        </ScrollView>
        
        <View style={styles.footer}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                width: width/2.7,
                height: 37,
                padding: 5,
                margin: 5,
                borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
                
              }}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
                BUY
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F54A26',
                alignItems: 'center',
                justifyContent: 'center',
                width: width/2.7,
                height: 37,
                padding: 5,
                margin: 5,
                borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
              }}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
                SELL
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#000',
  },
  TextStyle: {
    textAlign: 'center',
    color: '#FFF',
    padding: 3,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '200',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    backgroundColor: 'green',
    width: width / 1.5,
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
