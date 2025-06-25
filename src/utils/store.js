import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import themeSlice from "./slices/themeSlice";
import searchResultReducer from "./searchResultSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    search: searchSlice,
    searchResult: searchResultReducer,
    theme: themeSlice,
  },
});

export default store;
