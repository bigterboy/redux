/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//const {createStore} = require('redux');
import {Provider} from 'react-redux';

// const initialState = {
//   value: 0,
// };
// const reducer = (state = initialState, action) => {
//   if (action.type === 'UP') {
//     return {
//       value: state.value + 1,
//     };
//   }
//   if (action.type === 'DOWN') {
//     return {
//       value: state.value - 1,
//     };
//   }
//   return state;
// };

//const reducer = () => {};

//const store = createStore(reducer);

//const store = require('./Store/store');

import store from './Store/store';

export default class   extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => DemoRedux);
