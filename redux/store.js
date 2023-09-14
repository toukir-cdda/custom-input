import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    inputStyle: styleSlice,
  },
  devTools: true,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
});
