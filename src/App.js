import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/BodySection/MainContainer";

import Shorts from "./components/Explore/Shorts";
import MusicVideos from "./components/Explore/MusicVideos";
import Trending from "./components/Explore/Trending";
import Movies from "./components/Explore/Movies";
import Sports from "./components/Explore/Sports";
import Live from "./components/Explore/Live";
import Games from "./components/Explore/Games";
import Courses from "./components/Explore/Courses";
import FashionPage from "./components/Explore/Fashion";
import Podcast from "./components/Explore/Podcast";
import SearchResults from "./components/Header/SearchText/SearchResults";
import Shopping from "./components/Explore/Shopping";
import News from "./components/Explore/News";
import ThemeWrapper from "./components/Theme/ThemeWrapper";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/shorts",
        element: <Shorts />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "music",
        element: <MusicVideos />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "live",
        element: <Live />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "fashion",
        element: <FashionPage />,
      },
      {
        path: "podcasts",
        element: <Podcast />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "shopping",
        element: <Shopping />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <ThemeWrapper>
        <RouterProvider router={appRouter} />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
