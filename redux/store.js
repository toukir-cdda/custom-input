import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    inputStyle: styleSlice,
    formData: formSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(apiSlice.middleware),
});
