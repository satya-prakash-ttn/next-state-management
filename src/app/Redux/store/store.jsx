import { configureStore } from '@reduxjs/toolkit'; // Correct import from the package
import quoteReducer from '../reducers/quoteReducer';

const store = configureStore({
  reducer: {
    quotes: quoteReducer,  // Register the quoteReducer in the store
  },
});

export default store;
