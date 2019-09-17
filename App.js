/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import ComA from './Components/ComA';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            this.refs.mrA.clickA();
          }}>
          <Text>CHANGE COLOR C</Text>
        </TouchableOpacity>
        <Text> {this.props.myValue} </Text>
        <ComA ref="mrA" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {myValue: state.value};
}

export default connect(mapStateToProps)(App);
