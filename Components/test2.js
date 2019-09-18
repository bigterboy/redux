import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

let count = 0;

class Post extends Component {
  render() {
    console.log('RENDER POST');
    //console.log(`Posts render ${++count}`);
    return (
      <View>
        <Text>POST</Text>
      </View>
    );
  }
}

//export default connect(mapState)(Post);

export default Post;
