import React from "react";
import { AsyncStorage, View, Text, Modal, ScrollView, FlatList, RefreshControl, StyleSheet, Dimensions } from "react-native";
import { Button } from 'react-native-elements';
import {Appbar, Badge} from 'react-native-paper';

const {height, width} = Dimensions.get('window');
const item_data = [
    {
        "id": "15",
        "user_id": "147",
        "client_code": "2209078",
        "name": "MD FARHAN ASIF",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Apr, 2019 01:45:48 PM",
        "updated_at": "3rd Apr, 2019 01:46:01 PM",
        "status": "1",
        "amount": "5,000"
    },
    {
        "id": "14",
        "user_id": "147",
        "client_code": "2209078",
        "name": "MD FARHAN ASIF",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Apr, 2019 01:43:33 PM",
        "updated_at": "3rd Apr, 2019 01:44:21 PM",
        "status": "6",
        "amount": "2,000"
    },
    {
        "id": "10",
        "user_id": "147",
        "client_code": "2209078",
        "name": "MD FARHAN ASIF",
        "mobile": "01841333100",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "28th Jan, 2019 11:03:21 PM",
        "updated_at": "24th Jul, 2019 09:39:19 AM",
        "status": "4",
        "amount": "20,000"
    },
    {
        "id": "5",
        "user_id": "147",
        "client_code": "2209078",
        "name": "MD FARHAN ASIF",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Oct, 2018 05:26:08 PM",
        "updated_at": "3rd Oct, 2018 05:26:29 PM",
        "status": "6",
        "amount": "1,250"
    },
    {
        "id": "1",
        "user_id": "147",
        "client_code": "2209078",
        "name": "MD FARHAN ASIF",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "23rd Jul, 2018 04:28:31 PM",
        "updated_at": "13th Aug, 2018 06:47:55 PM",
        "status": "5",
        "amount": "10,500"
    }
];

export default class WithdrawComponent extends React.Component {
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
            itemData: null,
            profile:{
                "client_code": "2209078",
                "name": "MD FARHAN ASIF",
                "email": "testuser@yahoo.com",
                "mobile": "01878933100",
                "client_code": "22090678",
                "image": "http://uftcl.com/custom_files/user/",
                "cash_limit": "3,460.00"
            },    
            error: null,
            cash_limit: '3,460.00',
        };

        this.arrayholder = [];
    }

    componentWillMount() {
        //this.load()
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

    _onRefresh = () => {

        // this.setState({refreshing: true});
        // this._fetchData().then(() => {
        //     this.setState({refreshing: false});
        // });
    }

    render() {
        const { cash_limit, profile } = this.state;
        return (
            <View>
                <Appbar.Header style={styles.bottom}>
                    <Appbar.Content title="Withdraw"/>
                    <Appbar.Action icon="search" onPress={this._onSearch}/>
                    <Appbar.Action icon="add" onPress={this._onMore}/>
                </Appbar.Header>
                <View style={{ padding: 10, alignItems: 'flex-end' }}>
                    <Button
                        title={`Cash Limit: ${cash_limit}  BDT`}
                        type="solid"
                        raised
                        containerStyle={{width: width/2}}
                        buttonStyle={{backgroundColor: 'green',}}
                        titleStyle={{color: 'white'}}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={item_data}
                        renderItem={({ item, key }) => (
                            <View style={{padding:10, marginLeft:5,}} key={key}>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{color:'#689F38'}}>{item.created_at}</Text>
                                    {
                                        item.status == 1 ? 
                                        (
                                            <Badge style={{ backgroundColor: 'orange'}}>
                                                <Text style={{color: 'white'}}>Pending</Text>
                                            </Badge>
                                        )
                                        :
                                        (
                                            <Badge style={ item.status == 5 ? { backgroundColor: 'green'} : { backgroundColor: 'red'}}>
                                                <Text style={{color: 'white'}}>{ item.status == 5 ? 'Executed' : 'Cancelled'}</Text>
                                            </Badge>
                                        )
                                    }
                                    
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14, fontWeight:'bold'}}>Client Code: {item.client_code}</Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text>Bank Name: {item.bank_name}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text>Account No: {item.account_no}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14, fontWeight:'bold'}}>Amount: {item.amount}</Text>
                                </View>
                                
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                
                {/*<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: "center", padding: 10, margin: 10}}>
                    <Badge containerStyle={{ backgroundColor: 'green', height: 36}}>
                        <Text style={{fontSize: 15, fontWeight: "bold", color:"#FFF"}}>Cash Limit: {cash_limit} BDT</Text>
                    </Badge>
                </View>

                
                <List containerStyle={{paddingBottom: 100 }}>
                    <FlatList
                        data={item_data}
                        renderItem={({ item, key }) => (
                            <View style={{padding:10, marginLeft:5,}} key={key}>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{color:'#689F38'}}>{item.created_at}</Text>
                                    {
                                        item.status == 1 ? 
                                        (
                                            <Badge containerStyle={{ backgroundColor: 'orange'}}>
                                                <Text style={{color: 'white'}}>Pending</Text>
                                            </Badge>
                                        )
                                        :
                                        (
                                            <Badge containerStyle={ item.status == 5 ? { backgroundColor: 'green'} : { backgroundColor: 'red'}}>
                                                <Text style={{color: 'white'}}>Executed</Text>
                                            </Badge>
                                        )
                                    }
                                    
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14, fontWeight:'bold'}}>Client Code: {item.client_code}</Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text>Bank Name: {item.bank_name}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text>Account No: {item.account_no}</Text>
                                </View>
                                <View style={{padding: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:14, fontWeight:'bold'}}>Amount: {item.amount}</Text>
                                </View>
                                
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </List>*/}

            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: '#000'
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
        width: width / 1.5
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
        borderTopRightRadius: 12
    },
    container:{
        marginBottom: 100,
        paddingBottom: 100
    }
});
