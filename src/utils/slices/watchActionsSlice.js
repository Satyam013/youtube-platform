import { createSlice } from "@reduxjs/toolkit";

const watchActionsSlice = createSlice({
  name: "watchActions",
  initialState: {
    likedVideos: [],
    dislikedVideos: [],
    subscribedChannels: [],
    savedVideos: [],
  },
  reducers: {
    likeVideo: (state, action) => {
      const videoId = action.payload;
      if (!state.likedVideos.includes(videoId)) {
        state.likedVideos.push(videoId);
        state.dislikedVideos = state.dislikedVideos.filter(
          (id) => id !== videoId
        );
      }
    },
    dislikeVideo: (state, action) => {
      const videoId = action.payload;
      if (!state.dislikedVideos.includes(videoId)) {
        state.dislikedVideos.push(videoId);
        state.likedVideos = state.likedVideos.filter((id) => id !== videoId);
      }
    },
    toggleSubscribe: (state, action) => {
      const channelId = action.payload;
      if (state.subscribedChannels.includes(channelId)) {
        state.subscribedChannels = state.subscribedChannels.filter(
          (id) => id !== channelId
        );
      } else {
        state.subscribedChannels.push(channelId);
      }
    },
    toggleSave: (state, action) => {
      const videoId = action.payload;
      if (state.savedVideos.includes(videoId)) {
        state.savedVideos = state.savedVideos.filter((id) => id !== videoId);
      } else {
        state.savedVideos.push(videoId);
      }
    },
  },
});

export const { likeVideo, dislikeVideo, toggleSubscribe, toggleSave } =
  watchActionsSlice.actions;

export default watchActionsSlice.reducer;
