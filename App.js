import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeComponent from './components/HomeComponent';
import DetailsComponent from './components/DetailsComponent';
import BuySellComponent from './components/BuySellComponent';
import ConfirmComponent from './components/ConfirmComponent';
import NewsComponent from './components/NewsComponent';

import WithdrawComponent from './components/withdraw/WithdrawComponent';
import WithdrawOrderComponent from './components/withdraw/WithdrawOrderComponent';

import ReportComponent from './components/reports/ReportComponent';

import SettingsComponent from './components/settings/SettingsComponent';

console.disableYellowBox = true;

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Withdraw</Text>;

const NavigatorMenu = createStackNavigator(
  {
    Home: {
      screen: HomeComponent,
    },
    Details: {
      screen: DetailsComponent,
    },
    BuySell: {
      screen: BuySellComponent,
    },
    Confirm: {
      screen: ConfirmComponent,
    }   
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const WithdrawMenu = createStackNavigator({
    Withdraw: {
      screen: WithdrawComponent,
    },
    WithdrawOrder: {
      screen: WithdrawOrderComponent,
    },
  },
  {
    initialRouteName: 'Withdraw',
    headerMode: 'none',
  },
);

const ReportMenu = createStackNavigator({
    ReportHome: {
      screen: ReportComponent,
    },
  },
  {
    initialRouteName: 'ReportHome',
    headerMode: 'none',
  },
);

const SettingsMenu = createStackNavigator({
  SettingsHome: {
    screen: SettingsComponent,
  },
},
{
  initialRouteName: 'SettingsHome',
  headerMode: 'none',
},
);

const AppContainer = createAppContainer(NavigatorMenu);
const WithdrawContainer = createAppContainer(WithdrawMenu);
const ReportContainer = createAppContainer(ReportMenu);
const SettingsContainer = createAppContainer(SettingsMenu);

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'market', title: 'Market', icon: 'business', color: '#000' },
      { key: 'news', title: 'News', icon: 'web', color: '#000' },
      { key: 'settings', title: 'Settings', icon: 'settings', color: '#000' },
      { key: 'reports', title: 'Reports', icon: 'filter-none', color: '#000' },
      { key: 'withdraw', title: 'Withdraw', icon: 'clear-all', color: '#000' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    market: AppContainer,
    news: NewsComponent,
    settings: SettingsContainer,
    reports: ReportContainer,
    withdraw: WithdrawContainer,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
