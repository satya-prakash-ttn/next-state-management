import { configureStore } from '@reduxjs/toolkit'; 
import quoteReducer from '../reducers/quoteReducer';

const store = configureStore({
  reducer: {
    quotes: quoteReducer, 
  },
});

export default store;
