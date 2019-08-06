import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


const list = [
  {
    name: 'ORDER HISTORY',
  },
  {
    name: 'PORTFOLIO POSITION',
  },
  {
    name: 'CLIENT PROFIT AND LOSS',
  },
  {
    name: 'TRADER SUMMERY',
  },
  {
    name: 'INSTRUMENT COSTING REPORT',
  },
  {
    name: 'LEDGER STATEMENT',
  },
  {
    name: 'CONFIRMATION HISTORY',
  },
];

export default class ReportComponent extends React.Component {

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
                    <Appbar.Content title="Reports"/>
                    <Appbar.Action icon="mail-outline" onPress={this._onMore}/>
                </Appbar.Header>
            
                <View style={styles.container}>
                    <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHistory')}>
                          <View style={styles.listview}>
                            <View style={styles.leftlist}>
                                <Ionicons name="ios-paper" size={24} color="#1862ae" />
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                            <Ionicons name="ios-arrow-dropright" size={24} color="#1862ae" />
                          </View>
                        </TouchableOpacity>
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
