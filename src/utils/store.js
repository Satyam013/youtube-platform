import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchResultReducer from "./searchResultSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    search: searchSlice,
    searchResult: searchResultReducer,
  },
});

export default store;
