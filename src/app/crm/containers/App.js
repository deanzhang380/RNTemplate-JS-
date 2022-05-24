import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../components/home/Home'

import Home2 from '../components/home2/Home'
import ChanceContainer from './Chance/ChanceContainer'
import CustomerContainer from './Customers/CustomerContainer'
import DashboardContainer from './Dashboards/DashboardContainer'
import MenuContainer from './Menu/MenuContainer'
import NewFeedContainer from './NewFeed/NewFeedContainer'
import CommentsContainer from './Comments/CommentsContainer'
import TabBarContainer from './BottomTabBar/TabBarContainer'
const TabNavigator = createBottomTabNavigator(
  {
    NewFeedContainer: {
      screen: NewFeedContainer,
    },
    CommentsContainer: {
      screen: CommentsContainer,
    },
    DashboardContainer: {
      screen: DashboardContainer,
    },
    CustomerContainer: {
      screen: CustomerContainer,
    },
    ChanceContainer: {
      screen: ChanceContainer,
    },
    MenuContainer: {
      screen: MenuContainer,
    },
  },
  {
    tabBarComponent: props => <TabBarContainer {...props} />
  },
);

const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
  {

    TAB: {
      screen: TAB
    },

    Home: {
      screen: Home,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'TAB'

  }
);

export default createAppContainer(RootStack);
