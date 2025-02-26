export const productReducer = (state, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload, loading: false };
      case "ADD_PRODUCT":
        return { ...state, products: [...state.products, action.payload] };
      case "DELETE_PRODUCT":
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      case "LOADING":
        return { ...state, loading: true };
      case "ERROR":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  