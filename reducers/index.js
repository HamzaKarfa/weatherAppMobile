const initialState = {
    forecast:null,
    loader:false,
    backgroundImage : null
  };
  
  function rootReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case 'ADD_FORECAST':
        newState = {
          ...state,
          forecast : action.data
        };
        return newState;
      case 'UPDATE_LOADER':
        newState = {
          ...state,
          loader : action.data
        };
        return newState;
      case 'ADD_BACKGROUNG_IMAGE':
        newState = {
          ...state,
          backgroundImage : action.data
        };
        return newState;
      default:
        return state;
    }
  }
  
  export default rootReducer;