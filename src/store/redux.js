import { configureStore, createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: { isDark: false },
  reducers: {
    toggleIsDark: (state, action) => {
      return (state = { ...state, isDark: !state.isDark });
    },
  },
});

const navSlice = createSlice({
  name: "nav",
  initialState: { isFirstLoad: true },
  reducers: {
    toggleIsFirstLoad: (state, action) => {
      return (state = { ...state, isFirstLoad: action.payload });
    },
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
