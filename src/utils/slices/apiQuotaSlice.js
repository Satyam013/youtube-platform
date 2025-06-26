import { createSlice } from "@reduxjs/toolkit";

const apiQuotaSlice = createSlice({
  name: "apiQuota",
  initialState: {
    quotaExceeded: false,
  },
  reducers: {
    setQuotaExceeded: (state, action) => {
      state.quotaExceeded = action.payload;
    },
  },
});

export const { setQuotaExceeded } = apiQuotaSlice.actions;
export default apiQuotaSlice.reducer;
