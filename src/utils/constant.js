// const GOOGLE_API_KEY = "AIzaSyCQpUa-DlgG5M0HA9SvTazU3caX1KEmSjY";
const GOOGLE_API_KEY = "AIzaSyC8NZK9o-jBqdx03pM30WUX43PcJEVr1vA";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId, maxResults = 50) =>
  `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxResults}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
