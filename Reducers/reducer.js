const initialState = {
  value: 0,
  quote: 'Breaking Bad Quote',
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};

export default reducer;
