/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import ComB from './ComB';
import * as quoteActions from '../Action/quoteActions';

class ComA extends Component {
  // clickA() {
  //   this.refs.mrB.clickB();
  // }
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
        <ComB />
        <TouchableOpacity
          onPress={
            () =>
              //this.props.dispatch({type: 'LOAD_QUOTE'
              this.props.loadQuote()
            //this.props.dispatch({type: 'LOAD_QUOTE'})
          }>
          <Text>CHANGE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    loadQuote: () => dispatch(quoteActions.loadQuote()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ComA);
