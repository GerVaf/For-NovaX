import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
  title: {},
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTheme: (state) => {
      state.isOpened = true;
    },
    changeTitle: (state, { payload }) => {
      state.title = payload;
    },
  },
});

export const { addTheme, changeTitle } = dashboardSlice.actions;
export default dashboardSlice.reducer;
