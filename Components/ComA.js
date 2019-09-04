/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import ComB from './ComB';

export default class ComA extends Component {
  clickA() {
      this.refs.mrB.clickB();
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          width: 150,
        }}>
        <ComB ref="mrB"/>
      </View>
    );
  }
}
