import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";
import themeSlice from "./slices/themeSlice";
import searchResultReducer from "./slices/searchResultSlice";
import watchActionSlice from "./slices/watchActionsSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    search: searchSlice,
    searchResult: searchResultReducer,
    theme: themeSlice,
    watchActions: watchActionSlice,
  },
});

export default appStore;
