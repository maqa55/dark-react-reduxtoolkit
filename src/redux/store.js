import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/dark'; 

export const store = configureStore({
  reducer: {
    mode: modeReducer,  
  },
});
