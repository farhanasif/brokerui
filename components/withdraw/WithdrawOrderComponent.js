import React from "react";
import { AsyncStorage, View, Text, Modal, ScrollView, FlatList, RefreshControl } from "react-native";
import { SearchBar, Card, List, ListItem, Header, Badge } from 'react-native-elements';
//import url from '../assets/url';

const STORAGE_KEY = 'MYKEY'
const STORAGE_ROLE = 'MYROLE'
const STORAGE_LAN = 'MYLAN'

const item_data = [
    {
        "id": "15",
        "user_id": "147",
        "client_code": "22090",
        "name": "MD MAHBUB MOHSIN LEMON ",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Apr, 2019 01:45:48 PM",
        "updated_at": "3rd Apr, 2019 01:46:01 PM",
        "status": "5",
        "amount": "50"
    },
    {
        "id": "14",
        "user_id": "147",
        "client_code": "22090",
        "name": "MD MAHBUB MOHSIN LEMON ",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Apr, 2019 01:43:33 PM",
        "updated_at": "3rd Apr, 2019 01:44:21 PM",
        "status": "6",
        "amount": "200"
    },
    {
        "id": "10",
        "user_id": "147",
        "client_code": "22090",
        "name": "Mahbub Mohsin Lemon",
        "mobile": "01841333100",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "28th Jan, 2019 11:03:21 PM",
        "updated_at": "24th Jul, 2019 09:39:19 AM",
        "status": "4",
        "amount": "20"
    },
    {
        "id": "5",
        "user_id": "147",
        "client_code": "22090",
        "name": "MD MAHBUB MOHSIN LEMON ",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "3rd Oct, 2018 05:26:08 PM",
        "updated_at": "3rd Oct, 2018 05:26:29 PM",
        "status": "6",
        "amount": "100"
    },
    {
        "id": "1",
        "user_id": "147",
        "client_code": "22090",
        "name": "MD MAHBUB MOHSIN LEMON ",
        "mobile": "01716313161",
        "bank_name": "DUTCH-BANGLA BANK LTD",
        "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
        "account_no": "105.103.15790",
        "created_at": "23rd Jul, 2018 04:28:31 PM",
        "updated_at": "13th Aug, 2018 06:47:55 PM",
        "status": "5",
        "amount": "10"
    }
];

export default class FundWithdrawScreen extends React.Component {
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
            profile:null,    
            error: null,
            cash_limit: 0,
        };

        this.arrayholder = [];
    }

    componentWillMount() {
        this.load()
    }

    load = async () => {
        // try {
        //     const name = await AsyncStorage.getItem(STORAGE_KEY)
        //     const token = await AsyncStorage.getItem(STORAGE_ROLE)

        //     if (name !== null) {
        //         this.setState({token})
        //         this._fetchData();
        //         responseData = await this._fetchPersonalData();
        //         if(responseData !== null){
        //             this.setState({cash_limit : responseData.cash_limit})
        //         }
        //     }
        // } catch (e) {
        //     alert('Failed to load token.' + e)
        // }
    }

    _fetchData = async() => {
        // try {
        // let response = await fetch(
        //     url.baseurl,
        //     {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         token: this.state.token,
        //         action: 'withdrawRequest',
        //     }),
        //     }
        // );
        
        // let responseJson = await response.json();
        
        // this.setState({itemData: responseJson}); // filled data with dynamic array
        // this.setState({ loading: false });
        // } catch (error) {
        //     this.setState({ loading: false });
        //     alert(error);
        // }
    }

    _fetchPersonalData = async() => {
        try {
        let response = await fetch(
                url.baseurl,
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: this.state.token,
                    action: 'userProfile',
                }),
                }
            );
        
            let responseJson = await response.json();
            this.setState({profile: responseJson});
            return responseJson;
        } catch (error) {
            alert(error);
        }
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

        this.setState({refreshing: true});
        this._fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }

    render() {
        const { itemData, cash_limit, profile } = this.state;
        return (
            <View>
                <Header
                    leftComponent={{ 
                        icon: 'menu', 
                        color: '#fff',
                        onPress: () => {this.props.navigation.openDrawer()}, 
                    }}
                    centerComponent={{ text: 'WITHDRAW', style: { color: '#fff' } }}
                    rightComponent={{ 
                        icon: 'plus', 
                        type:'entypo', 
                        color: '#fff',
                        onPress: () => {this.props.navigation.navigate('WithdrawScreen',{
                            profile: profile
                        })}
                    }}
                />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: "center", padding: 10, margin: 10}}>
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
                </List>
                </ScrollView>
            </View>
        
        );
    }
}