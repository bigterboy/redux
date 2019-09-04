/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';

export default class ComC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow',
    };
  }



  clickC() {
    this.setState({
      color: 'white',
    });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.color,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 50,
        }}
      />
    );
  }
}
