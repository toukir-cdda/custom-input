import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styles: {},
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    selectStyles: (state, action) => {
      state.styles = action.payload;
    },
    clearStyles: (state, action) => {
      state.styles = {};
    },
  },
});

export const { selectStyles, clearStyles } = styleSlice.actions;
export default styleSlice.reducer;
