const initialState = {
  value: 0,
  quote: 'Breaking Bad Quote',
  isLoading: false,
  error: null,
  count: 0,
  posts: [
    {id: 'post-1', author: 'user-1', title: 'Post 1'},
    {id: 'post-2', author: 'user-2', title: 'Post 2'},
    {id: 'post-3', author: 'user-3', title: 'Post 3'},
    {id: 'post-4', author: 'user-1', title: 'Post 4'},
    {id: 'post-5', author: 'user-2', title: 'Post 5'},
    {id: 'post-6', author: 'user-3', title: 'Post 6'},
  ],
  users: [
    {
      id: 'user-1',
      first: 'Tom',
      last: 'Scott',
    },
    {
      id: 'user-2',
      first: 'Dick',
      last: 'Wolf',
    },
    {
      id: 'user-3',
      first: 'Harry',
      last: 'Scott',
    },
  ],
  otherData: 1,
  resolution: 100,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UP':
      return {
        value: state.value + 1,
      };
    case 'DOWN':
      return {
        value: state.value - 1,
      };
    case 'LOAD_QUOTE':
      return {
        quote: 'NEW',
      };
    case 'LOAD_QUOTE_START':
      return {
        isLoading: true,
      };
    case 'LOAD_QUOTE_SUCCESS':
      console.log('LOAD_QUOTE_SUCCESS');
      return {...state, quote: action.payload, isLoading: false};
    case 'LOAD_QUOTE_FAILURE':
      return {...state, error: action.payload, isLoading: false};
    case 'RECEIVE_DATA':
      const newState = {...state};
      action.payload.users.forEach(user => {
        newState[user.id] = user;
      });
      console.log(state);
      console.log('chay khong');
      return newState;
    case 'TEST':
      console.log(state);
      return state;
    case 'TEST1':
      return {...state, otherData: 2};

    default:
      return state;
  }
};

export default reducer;
