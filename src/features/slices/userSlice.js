import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: () => {
      return {
        user: null,
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (sate) => sate.user.user;
export default userSlice.reducer;
