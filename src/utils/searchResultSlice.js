import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    results: [],
    query: "",
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload.results;
      state.query = action.payload.query;
    },
  },
});

export const { setSearchResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;
