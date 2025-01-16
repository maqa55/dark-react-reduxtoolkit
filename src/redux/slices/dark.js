import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: "dark",  
};

export const modeSlice = createSlice({
  name: 'mode',  
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";  
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
