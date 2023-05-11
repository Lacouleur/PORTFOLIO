/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { findIndex, returnImgIndex } from "./reduxhelpers";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isDark: false,
    isFullView: {
      toogle: false,
      imgInfos: { url: "", meta: { title: "", subName: undefined, id: "" } },
      imgIndex: 0,
      galerieName: "",
    },
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
      if (action.payload.toogle) {
        const { toogle, imgInfos, galerieName } = action.payload;
        const imgIndex = findIndex(
          galerieName === "paintings"
            ? state.paintingsImagesList
            : state.illustrationsImagesList,
          imgInfos.url,
        );
        return (state = {
          ...state,
          isFullView: { toogle, imgInfos, imgIndex, galerieName },
        });
      }
      return (state = {
        ...state,
        isFullView: {
          toogle: false,
        },
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
          imgInfos:
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
