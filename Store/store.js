const {createStore, applyMiddleware} = require('redux');
import reducer from '../Reducers/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));
//import {getPosts} from '../Components/fixtures';

store.dispatch({type: 'TEST'});

export default store;
