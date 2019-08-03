import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import { Avatar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';


const list = [
  {
    lefticon: 'md-person',
    name: 'PERSONAL INFORMATION',
  },
  {
    lefticon: 'md-cash',
    name: 'CASH LIMIT: 3,450.00',
  },
  {
    lefticon: 'md-call',
    name: 'CONTACT US',
  },
  {
    lefticon: 'md-checkbox-outline',
    name: 'COMPLAIN',
  },
  {
    lefticon: 'md-star-outline',
    name: 'RATE US',
  },
  {
    lefticon: 'md-keypad',
    name: 'CHANGE PASSWORD',
  },
  {
    lefticon: 'md-log-out',
    name: 'LOGOUT',
  },
];

export default class SettingsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            location: null,
            errorMessage: null,
            formatted_address: 'waiting....off for now',
        };
    }

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

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Regulations</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex: 1,
                justifyContent: 'flex-start',
                backgroundColor: '#ecf0f1',
            }}>
                <Appbar.Header style={styles.bottom}>
                    <Appbar.Content title="Settings"/>
                    <Appbar.Action icon="md-checkbox-outline" onPress={this._onMore}/>
                </Appbar.Header>
                <View style={{flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-between'}}>
                    <View style={{padding: 10, marginLeft: 10}}>
                        <Avatar
                            size="large"
                            rounded
                            source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                        />
                    </View>
                    <View style={{padding: 10, marginRight: 10}}>
                        <Text style={{fontSize: 20, fontWeight: '800', color: '#1C2833'}}>MD FARHAN ASIF</Text>
                        <Text style={{fontSize: 14, fontWeight: '200', color: '#1C2833'}}>+880 1717 898989</Text>
                        <Text style={{fontSize: 14, fontWeight: '200', color: '#1C2833'}}>xyz@gmail.com</Text>
                        <Text style={{fontSize: 14, fontWeight: '200', color: '#1C2833'}}>CLIENT CODE: 2209073</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <View style={styles.listview}>
                        <View style={styles.leftlist}>
                            <Ionicons name={item.lefticon} size={26} color="green" style={{paddingRight:5}}/>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                        <Ionicons name="ios-arrow-forward" size={24} color="green" />
                        </View>
                    )}
                    ItemSeparatorComponent={this.renderSeparator}
                    //ListHeaderComponent={this.renderHeader}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    
    //alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  listview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
  },
  item: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  leftlist: {
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  headerText:{
    fontSize: 18,
    fontWeight: '700'
  },
  bottom: {
    backgroundColor: '#000'
},
});
