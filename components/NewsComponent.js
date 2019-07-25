import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {Appbar, Searchbar, List, Button} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const list = [
    {
        id: 1,
        preference: 'Buy'
    }, {
        id: 2,
        preference: 'Sell'
    }, {
        id: 3,
        preference: 'Buy'
    }, {
        id: 4,
        preference: 'Sell'
    }, {
        id: 5,
        preference: 'Buy'
    }, {
        id: 6,
        preference: 'Sell'
    }, {
        id: 7,
        preference: 'Buy'
    }, {
        id: 8,
        preference: 'Sell'
    }, {
        id: 9,
        preference: 'Buy'
    }, {
        id: 10,
        preference: 'Sell'
    }, {
        id: 11,
        preference: 'Buy'
    }, {
        id: 12,
        preference: 'Sell'
    }, {
        id: 13,
        preference: 'Buy'
    }, {
        id: 14,
        preference: 'Sell'
    }, {
        id: 15,
        preference: 'Buy'
    }, {
        id: 16,
        preference: 'Sell'
    }, {
        id: 17,
        preference: 'Buy'
    }, {
        id: 18,
        preference: 'Sell'
    }
]

export default class NewsComponent extends Component {
    render() {
        return (
            <View>
                <Appbar.Header style={styles.bottom}>
                    <Appbar.BackAction onPress={this._goBack}/>
                    <Appbar.Content title="Latest News"/>
                    <Appbar.Action icon="search" onPress={this._onSearch}/>
                    <Appbar.Action icon="more-vert" onPress={this._onMore}/>
                </Appbar.Header>
                <FlatList
                    data={list}
                    renderItem={({ item, key }) => (
                        <Card style={{padding:10, marginBottom: 5,}}>
                            <Card.Cover
                            source={require('../assets/chart.png')}/>
                            <Card.Content>
                                <Title>BRACBANK: Board Meeting schedule under LR 16(1)</Title>
                                <Paragraph>As per Regulation 16(1) of the Dhaka Stock Exchange (Listing) Regulations, 2015, the Company has informed that a meeting of the Board of Directors will be held on July 22, 2019 at 3:30 PM to consider, among others, un-audited financial statements of the Company for the Second Quarter (Q2) period ended on June 30, 2019.</Paragraph>
                                <Paragraph style={{fontWeight: '500'}}>Mon, 15th July 2019 3:20 pm</Paragraph>
                            </Card.Content>
                        </Card>
                    )}
                    keyExtractor={item => item.id}
                />
                
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
    }
});
