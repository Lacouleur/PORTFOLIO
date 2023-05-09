/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { func } from "prop-types";
import { returnImgIndex } from "./reduxhelpers";

function findIndex(list, url) {
  let id = 0;
  list?.find((img, index) => {
    if (img === url) {
      id = index;
    }
  });
  return id;
}
const mainSlice = createSlice({
  name: "main",
  initialState: {
    isDark: false,
    isFullView: { toogle: false, url: "", imgIndex: 0, galerieName: "" },
    paintingsImagesList: [],
    illustrationsImagesList: [],
    device: "desktop",
  },
  reducers: {
    toggleIsDark: (state) => (state = { ...state, isDark: !state.isDark }),
    setDevice: (state, action) =>
      (state = {
        ...state,
        device: action.payload,
      }),
    toggleFullView: (state, action) => {
      const { toogle, url, galerieName } = action.payload;
      const imgIndex = findIndex(state.paintingsImagesList, url);
      return (state = {
        ...state,
        isFullView: { toogle, url, imgIndex, galerieName },
      });
    },
    changeFullViewImg: (state, action) => {
      const { imgIndex, galerieName } = state.isFullView;
      const { paintingsImagesList, illustrationsImagesList } = state;

      const move = returnImgIndex(
        action.payload,
        imgIndex,
        galerieName === "paintings"
          ? paintingsImagesList.length
          : illustrationsImagesList.length,
      );

      return (state = {
        ...state,
        isFullView: {
          toogle: true,
          url:
            galerieName === "paintings"
              ? paintingsImagesList[move]
              : illustrationsImagesList[move],
          imgIndex: move,
          galerieName,
        },
      });
    },
    addItemToImagesList: (state, action) => {
      const { galerieName, newItem } = action.payload;
      if (galerieName === "paintings") {
        return (state = {
          ...state,
          paintingsImagesList: [...state.paintingsImagesList, newItem],
        });
      }
      if (galerieName === "illustrations") {
        return (state = {
          ...state,
          illustrationsImagesList: [...state.illustrationsImagesList, newItem],
        });
      }
    },
  },
});

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isFirstLoad: true,
    fixedNav: undefined,
    location: "paintings",
  },
  reducers: {
    toggleIsFirstLoad: (state, action) =>
      (state = { ...state, isFirstLoad: action.payload }),
    setFixedNav: (state, action) =>
      (state = {
        ...state,
        fixedNav: action.payload,
      }),
    setLocation: (state, action) =>
      (state = {
        ...state,
        location: action.payload,
      }),
  },
});

const headerSlice = createSlice({
  name: "header",
  initialState: { showName: false },
  reducers: {
    setShowName: (state, action) =>
      (state = { ...state, showName: action.payload }),
  },
});

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    nav: navSlice.reducer,
    header: headerSlice.reducer,
  },
});

export const {
  toggleIsDark,
  toggleFullView,
  addItemToImagesList,
  changeFullViewImg,
  setDevice,
} = mainSlice.actions;
export const { toggleIsFirstLoad, setFixedNav, setPagesRefs, setLocation } =
  navSlice.actions;
export const { setShowName } = headerSlice.actions;
