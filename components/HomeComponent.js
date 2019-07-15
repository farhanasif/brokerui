import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Modal,
  ScrollView,
  FlatList,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Appbar, Searchbar, List, Button } from 'react-native-paper';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const STORAGE_KEY = 'MYKEY';
const STORAGE_ROLE = 'MYROLE';
const STORAGE_LAN = 'MYLAN';

const { height, width } = Dimensions.get('window');

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isLoading: true,
      refreshing: false,
      jobcategory: '',
      searchCategory: '',
      modalVisible: false,
      isConnected: 'online',
      loading: false,
      data: [],
      error: null,
      showCancel: false,
    };

    this.arrayholder = [];
  }

  componentWillMount() {
    this.load();
  }

  load = async () => {
    try {
      this.makeRemoteRequest();
    } catch (e) {
      console.error('Failed to load token.' + e);
    }
  };

  makeRemoteRequest = async () => {
    this.setState({ loading: true });

    fetch('https://api.uftcl.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'stockListDSE',
        token: '1001',
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          loading: false,
        });
        this.arrayholder = res;
        //console.log('data');
        console.log(res);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          //marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.MKISTAT_INSTRUMENT_CODE.toUpperCase()}}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    if (this.state.showCancel) {
      return (
        <Searchbar
          placeholder="Type Here..."
          onChangeText={text => this.searchFilterFunction(text)}
        />
      );
    } else {
      return null;
    }
  };

  _onPress = item => {
    this.props.navigation.navigate('Details', {
      item: item,
    });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.makeRemoteRequest().then(() => {
      this.setState({ refreshing: false });
    });
  };

  _onPressList = async (preference, visible) => {
    await this.setState({ searchCategory: preference });
    await this.setState({ modalVisible: visible });

    //this._fetchData();
  };

  _goBack = () => console.log('Went back');

  _onSearch = () => {
    //this.setState({ showCancel: !this.state.showCancel });
  };

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <View style={styles.mainviewStyle}>
        <Appbar.Header style={styles.bottom}>
          <Appbar.Content title="Bank Asia" subtitle="Securities Limited" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <Text style={styles.TextStyle}> Start Trading Here. </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this._onPress(item)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    paddingTop: 10,
                  }}>
                  <Text style={{ fontWeight: '800', fontSize: 15 }}>
                    {item.MKISTAT_INSTRUMENT_CODE}
                  </Text>
                  <Text style={{ fontWeight: '800', fontSize: 15 }}>{`${
                    item.MKISTAT_PUB_LAST_TRADED_PRICE
                  }`}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Ionicons name="md-stopwatch" size={17} color="orange" />
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 13,
                        color: 'gray',
                        marginLeft: 5,
                      }}>{`YCP : ${item.MKISTAT_YDAY_CLOSE_PRICE} | Openp :${
                      item.MKISTAT_OPEN_PRICE
                    }`}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Ionicons
                      name={
                        item.MKISTAT_CLOSE_PRICE -
                          item.MKISTAT_PUB_LAST_TRADED_PRICE >
                        0
                          ? 'md-arrow-dropup'
                          : 'md-arrow-dropdown'
                      }
                      size={20}
                      color={
                        item.MKISTAT_CLOSE_PRICE -
                          item.MKISTAT_PUB_LAST_TRADED_PRICE >
                        0
                          ? 'green'
                          : 'red'
                      }
                    />
                    <Text
                      style={{
                        marginLeft: 3,
                        color:
                          item.MKISTAT_CLOSE_PRICE -
                            item.MKISTAT_PUB_LAST_TRADED_PRICE >
                          0
                            ? 'green'
                            : 'red',
                      }}>{`${(
                      item.MKISTAT_CLOSE_PRICE -
                      item.MKISTAT_PUB_LAST_TRADED_PRICE
                    ).toFixed(4)}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.MKISTAT_INSTRUMENT_NUMBER}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          />
        </View>
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
  mainviewStyle: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    },
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
