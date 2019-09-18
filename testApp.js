/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Test1 from './Components/test1';
import Test2 from './Components/test2';
import {connect} from 'react-redux';

// class testApp extends Component {
//   render() {
//     return (
//       <View>
//         <Test1 />
//         <Test2 />
//       </View>
//     );
//   }
// }

let testApp = ({otherData, resolution}) => (
  <View>
    <Test1 data={otherData} />
    <Test2 resolution={resolution} />
    <TouchableOpacity onPress={() => this.props.dispatch({type: 'TEST1'})}>
      <Text>CHANGE</Text>
    </TouchableOpacity>
  </View>
);

const doubleRes = size => ({
  width: size.width * 2,
  height: size.height * 2,
});

function mapStateToProps(state) {
  return {
    otherData: state.otherData,
    resolution: doubleRes(state.resolution),
  };
}

export default connect(mapStateToProps)(testApp);
