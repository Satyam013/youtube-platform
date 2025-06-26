// src/utils/slices/watchActionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedVideos: [],
  dislikedVideos: [],
  subscribedChannels: [],
  savedVideos: [],
  shareHistory: [],
  downloadHistory: [],
};

const watchActionsSlice = createSlice({
  name: "watchActions",
  initialState,
  reducers: {
    likeVideo: (state, action) => {
      const videoId = action.payload;
      if (state.likedVideos.includes(videoId)) {
        // toggle off like
        state.likedVideos = state.likedVideos.filter((id) => id !== videoId);
      } else {
        // add like and remove dislike if present
        state.likedVideos.push(videoId);
        state.dislikedVideos = state.dislikedVideos.filter(
          (id) => id !== videoId
        );
      }
    },
    dislikeVideo: (state, action) => {
      const videoId = action.payload;
      if (state.dislikedVideos.includes(videoId)) {
        // toggle off dislike
        state.dislikedVideos = state.dislikedVideos.filter(
          (id) => id !== videoId
        );
      } else {
        // add dislike and remove like if present
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
    trackShare: (state, action) => {
      const videoId = action.payload;
      state.shareHistory.push({ videoId, time: Date.now() });
    },
    trackDownload: (state, action) => {
      const videoId = action.payload;
      state.downloadHistory.push({ videoId, time: Date.now() });
    },
  },
});

export const {
  likeVideo,
  dislikeVideo,
  toggleSubscribe,
  toggleSave,
  trackShare,
  trackDownload,
} = watchActionsSlice.actions;

export default watchActionsSlice.reducer;
