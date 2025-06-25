// src/utils/format.js

export const formatViewCount = (viewCount) => {
  if (!viewCount) return "";
  const count = parseInt(viewCount, 10);
  if (count >= 1e9) return (count / 1e9).toFixed(1) + "B views";
  if (count >= 1e6) return (count / 1e6).toFixed(1) + "M views";
  if (count >= 1e3) return (count / 1e3).toFixed(1) + "K views";
  return count + " views";
};

export const formatPublishedTime = (dateString) => {
  const published = new Date(dateString);
  const now = new Date();
  const secondsAgo = Math.floor((now - published) / 1000);

  const minutes = Math.floor(secondsAgo / 60);
  const hours = Math.floor(secondsAgo / 3600);
  const days = Math.floor(secondsAgo / 86400);
  const weeks = Math.floor(secondsAgo / 604800);
  const months = Math.floor(secondsAgo / 2592000);
  const years = Math.floor(secondsAgo / 31536000);

  if (years >= 1) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months >= 1) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (weeks >= 1) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours >= 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes >= 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

export const formatLikeCount = (likeCount) => {
  if (!likeCount) return "";
  const count = parseInt(likeCount, 10);
  if (count >= 1e6) return (count / 1e6).toFixed(1) + "M likes";
  if (count >= 1e3) return (count / 1e3).toFixed(1) + "K likes";
  return count + " likes";
};

export const formatDuration = (isoDuration) => {
  if (!isoDuration) return "";
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  let hours = match[1] ? parseInt(match[1]) : 0;
  let minutes = match[2] ? parseInt(match[2]) : 0;
  let seconds = match[3] ? parseInt(match[3]) : 0;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
