/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: { isDark: false },
  reducers: {
    toggleIsDark: (state, action) =>
      (state = { ...state, isDark: !state.isDark }),
  },
});

const navSlice = createSlice({
  name: "nav",
  initialState: { isFirstLoad: true },
  reducers: {
    toggleIsFirstLoad: (state, action) =>
      (state = { ...state, isFirstLoad: action.payload }),
  },
});

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    nav: navSlice.reducer,
  },
});

export const { toggleIsDark } = mainSlice.actions;
export const { toggleIsFirstLoad } = navSlice.actions;
