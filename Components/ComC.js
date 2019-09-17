/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class ComC extends Component {
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
        }}>
        <TouchableOpacity onPress={() => this.props.dispatch({type: 'UP'})}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.dispatch({type: 'DOWN'})}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(ComC);
