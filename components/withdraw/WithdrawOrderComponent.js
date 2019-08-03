import React from "react";
import { AsyncStorage, View, Text, Modal, ScrollView, FlatList, RefreshControl, StyleSheet, Dimensions } from "react-native";
import {Appbar, Badge} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';

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

export default class WithdrawOrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            token: '9800',
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
                "bank_name": "DUTCH-BANGLA BANK LTD",
                "branch_name": "MOTIJHEEL FOREIGN EXCHANGE",
                "account_no": "105.103.15790",
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

    _goBack = () => this.props.navigation.goBack();

    render() {
        const { cash_limit, profile } = this.state;
        return (
            <View style={{backgroundColor: '#f6f6f6', height: height}}>
                <Appbar.Header style={styles.bottom}>
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Withdraw Request"/>
                </Appbar.Header>
                <View style={{ padding: 10, alignItems: 'flex-end' }}>
                    <Button
                        title={`Cash Limit: ${cash_limit}  BDT`}
                        type="solid"
                        raised
                        containerStyle={{width: width/2}}
                        buttonStyle={{backgroundColor: '#1862ae',}}
                        titleStyle={{color: 'white'}}
                    />
                </View>
                <View style={styles.container}>
                    <ScrollView>
                        <Input
                            label='Name'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.name}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Email'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.email}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Mobile'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.mobile}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Client Code'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.client_code}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Bank Name'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.bank_name}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Branch Name'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.bank_name}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Account no.'
                            labelStyle={styles.textLabel}
                            placeholder='BASIC INPUT'
                            value={this.state.profile.account_no}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <Input
                            label='Withdraw Amount'
                            labelStyle={styles.textLabel}
                            placeholder='0'
                            value={this.state.profile.withdrawamount}
                            containerStyle={{marginBottom: 5}}
                            inputStyle={styles.textInput}
                        />
                        <View style={{ padding: 10, alignItems: 'flex-start' }}>
                            <Button
                                title={`Submit`}
                                type="solid"
                                raised
                                containerStyle={{width: width/3}}
                                buttonStyle={{backgroundColor: '#1862ae',}}
                                titleStyle={{color: 'white'}}
                            />
                        </View>
                    </ScrollView>
                    

                </View>
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
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f6f6f6',
        backgroundColor: '#f6f6f6',
        marginHorizontal:10,
        marginBottom: 200,
        paddingBottom: 30,
    },
    cardView: { 
        marginHorizontal: 12,
        marginVertical: 8, 
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    textLabel: {fontSize: 16, color: '#000', marginTop: 3, fontWeight: '700'},
    textInput:{ fontSize: 16, color: '#000', fontWeight: '300'}

});
