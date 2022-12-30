import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: "N1l0s2ySoy9ptJEKCdmJ",
    channelName: "testRoom",
  },
  reducers: {
    setChannel: (state, { payload }) => {
      state.channelId = payload.id;
      state.channelName = payload.name;
    },
    resetChannel: (state) => {
      return {
        channelId: "N1l0s2ySoy9ptJEKCdmJ",
        channelName: "testRoom",
      };
    },
  },
});
export const { setChannel, resetChannel } = appSlice.actions;
export default appSlice.reducer;
