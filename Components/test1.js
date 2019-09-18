import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
  //   componentDidMount() {
  //     setInterval(() => {}, 1000);
  //   }

  render() {
    console.log('RENDER COUNTER');
    return <Text>Counter</Text>;
  }
}

// const mapState = state => ({count: state.count});
// const mapDispatch = {
//   increment: () => ({type: 'INCREMENT'}),
// };

// export default connect(
//   mapState,
//   mapDispatch,
// )(Counter);

export default Counter;
