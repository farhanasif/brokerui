import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeComponent from './components/HomeComponent';
import DetailsComponent from './components/DetailsComponent';
import NewsComponent from './components/NewsComponent';

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
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(NavigatorMenu);

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'market', title: 'Market', icon: 'business', color: '#000' },
      { key: 'news', title: 'News', icon: 'web', color: '#000' },
      { key: 'withdraw', title: 'Withdraw', icon: 'clear-all', color: '#000' },
      { key: 'reports', title: 'Reports', icon: 'filter-none', color: '#000' },
      { key: 'settings', title: 'Settings', icon: 'reorder', color: '#000' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    market: AppContainer,
    news: NewsComponent,
    withdraw: RecentsRoute,
    reports: RecentsRoute,
    settings: RecentsRoute,
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
