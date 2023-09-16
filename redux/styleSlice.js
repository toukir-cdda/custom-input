import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  field_name: "",
  field_style: {},
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    selectStyles: (state, action) => {
      state.field_style = action.payload.field_style;
      state.field_name = action.payload.field_name;
    },
    clearStyles: (state, action) => {
      state.field_style = {};
      state.field_name = "";
    },
  },
});

export const { selectStyles, clearStyles } = styleSlice.actions;
export default styleSlice.reducer;
