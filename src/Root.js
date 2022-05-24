//Linhtn23

import React from "react";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import allReducers from './redux/reducers';
import rootSaga from './redux/middleware/saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// import BostonOfficer from "./app/boston_officer/containers/App"
// import BostonDelivery from "./app/boston_delivery/containers/App"
import CRM from "./app/crm/containers/App"

const RootStack = createStackNavigator(
  {
    CRM: {
      screen: CRM,
    },
    // BostonOfficer: {
    //   screen: BostonOfficer,
    // },
    // BostonDelivery: {
    //   screen: BostonDelivery,
    // },
  },
  {
    initialRouteName:  "CRM",
    mode: 'modal',
    headerMode: 'none',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class Root extends React.Component {
  render() {
    return    <Provider store={store}>
                  <AppContainer />
              </Provider>;

  }
}

sagaMiddleware.run(rootSaga);
