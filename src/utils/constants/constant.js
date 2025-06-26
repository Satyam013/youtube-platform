const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const GOOGLE_API_KEY = "AIzaSyBHDXUvZW_Im1nmADMt9I_42mp_ymItfho";
// console.log("GOOGLE_API_KEY:", process.env.REACT_APP_GOOGLE_API_KEY);

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId, maxResults = 50) =>
  `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxResults}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUBSCRIPTION_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_TRENDING_VIDEOS = 
`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=48&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_DETAILS = (videoIds) =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${GOOGLE_API_KEY}`;

export const getTrendingMusicVideosAPI = (region = "IN") =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${region}&videoCategoryId=10&maxResults=25&key=${GOOGLE_API_KEY}`;

export const getTrendingMoviesAPI = (region) =>
  `https://api.themoviedb.org/3/trending/movie/day?api_key=${GOOGLE_API_KEY}&region=${region}`;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const MOCK_AD_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXsLi0q3PJb34AqWTOaB7Gg&maxResults=1&order=date&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SPORTS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=sports&type=video&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_LIVE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&maxResults=25&regionCode=US&q=movies&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_GAMING_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=20&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_COURSES_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=courses|tutorials|learning&type=video&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_PODCASTS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=podcast&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_FASHION_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=fashion&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SHORTS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=shorts&type=video&videoDuration=short&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_RESULTS_API = (query) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${GOOGLE_API_KEY}&q=${query}`;

export const YOUTUBE_SHOPPING_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=shopping%20haul&type=video&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_NEWS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=latest%20news&type=video&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SUBSCRIBER_API = (s) =>
  `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${s}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
