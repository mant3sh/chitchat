import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import appSlice from "./slices/appSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice,
  },
});
export default store;
