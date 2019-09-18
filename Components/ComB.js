/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import ComC from './ComC';

export default class ComB extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          width: 100,
        }}>
        <ComC />
      </View>
    );
  }
}
