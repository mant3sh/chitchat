import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, { payload }) => {
      state.app += payload;
    },
  },
});
export const { setChannelId } = appSlice.actions;
export default appSlice.reducer;
