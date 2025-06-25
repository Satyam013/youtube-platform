import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Trending from "./components/Trending";
import MusicVideos from "./components/MusicVideos";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import Live from "./components/Live";
import Games from "./components/Games";
import Courses from "./components/Courses";
import Podcast from "./components/Podcast";
import Fashion from "./components/Fashion";
import Shorts from "./components/Shorts";
import SearchResults from "./components/header/SearchResults";

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
        element: <Fashion />,
      },
      {
        path: "podcasts",
        element: <Podcast />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
