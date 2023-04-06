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

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
});

export const { toggleIsDark } = mainSlice.actions;
