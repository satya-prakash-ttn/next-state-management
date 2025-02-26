export const FETCH_QUOTES_REQUEST = "FETCH_QUOTES_REQUEST";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";

export const fetchQuotes = () => async (dispatch) => {
  dispatch({ type: FETCH_QUOTES_REQUEST });

  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();

    dispatch({ type: FETCH_QUOTES_SUCCESS, payload: data.quotes });
  } catch (error) {
    dispatch({ type: FETCH_QUOTES_FAILURE, payload: error.message });
  }
};
