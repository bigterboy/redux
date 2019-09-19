import axios from 'axios';
export const loadQuote = () => {
  //   return {
  //     type: 'LOAD_QUOTE',
  //   };

  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    axios
      .get('http://localhost/DemoLive/testApi.php')
      .then(function(response) {
        console.log('thanh cong');
        setInterval(
          () =>
            dispatch({type: 'LOAD_QUOTE_SUCCESS', payload: response.data.kq}),
          2000,
        );
      })
      .catch(function(error) {
        dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
      });
  };
};
