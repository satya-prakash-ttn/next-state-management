const initialState = {
  quotes: [],
  loading: true, 
  error: null,   
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_QUOTES_SUCCESS":
      return {
        ...state,
        loading: false,
        quotes: action.payload,
      };

    case "FETCH_QUOTES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default quoteReducer;
