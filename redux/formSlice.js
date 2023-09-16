import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.form = action.payload;
    },
    updateFormData: (state, action) => {
      const formData = { ...state.form };
      const { field_name, updated_styles } = action.payload;
      const fieldToUpdate = formData?.join?.find(
        (field) => field.name === field_name
      );

      if (fieldToUpdate) {
        fieldToUpdate.styles = updated_styles;
      }
      state.form = formData;
    },
  },
});

export const { setFormData, updateFormData } = formSlice.actions;
export default formSlice.reducer;
