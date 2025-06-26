import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../../utils/slices/searchSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../../../utils/constants/constant";
import { useNavigate } from "react-router-dom";
import { setSearchResults } from "../../../utils/slices/searchResultSlice";
import MicButton from "../SearchAudio/MicButton";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) return;

      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const fetchAndStoreResults = async (query) => {
    const res = await fetch(YOUTUBE_SEARCH_RESULTS_API(query));
    const data = await res.json();
    console.log(data);
    dispatch(setSearchResults({ query, results: data.items }));
    navigate(`/results?search_query=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
    setSearchQuery("");
  };

  const handleSearch = async () => {
    fetchAndStoreResults(searchQuery);
  };

  return (
    <div className="col-span-7 relative">
      <div className="flex justify-center ">
        <input
          className="w-full border border-gray-400 px-4 py-1 text-lg rounded-l-full dark:text-black"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          onKeyDown={(e) =>
            // e.key === "Enter" && fetchAndStoreResults(searchQuery)
            e.key === "Enter" && handleSearch()
          }
        />
        <button
          className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100 text-sm"
          onClick={handleSearch}
        >
          🔍
        </button>
        <MicButton
          onVoiceResult={(spokenText) => {
            setSearchQuery(spokenText);
            fetchAndStoreResults(spokenText);
          }}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bg-white py-2 px-2 w-full shadow-lg rounded-lg border mt-1 z-10 dark:text-black">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="py-1 px-3 text-sm hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => fetchAndStoreResults(s)}
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// src/components/Search/SearchBar.js
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cacheResults } from "../../utils/searchSlice";
// import { setSearchResults } from "../../utils/searchResultSlice";
// import {
//   YOUTUBE_SEARCH_API,
//   YOUTUBE_SEARCH_RESULTS_API,
// } from "../../utils/constant";
// import { useNavigate } from "react-router-dom";
// import MicButton from "./MicButton";

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const searchCache = useSelector((store) => store.search);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchQuery.trim() === "") return;
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSuggestions();
//       }
//     }, 200);
//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   const getSearchSuggestions = async () => {
//     const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const data = await res.json();
//     setSuggestions(data[1]);
//     dispatch(cacheResults({ [searchQuery]: data[1] }));
//   };

//   const fetchSearchResults = async (query) => {
//     const res = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
//     const data = await res.json();
//     dispatch(setSearchResults({ query, results: data.items }));
//     navigate(`/results?search_query=${encodeURIComponent(query)}`);
//     setShowSuggestions(false);
//      // hide after action
//   };

//   return (
//     <div className="col-span-7 relative">
//       <div className="flex justify-center items-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onFocus={() => setShowSuggestions(true)}
//           onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               fetchSearchResults(searchQuery);
//             }
//           }}
//           placeholder="Search"
//           className="w-full border border-gray-400 px-3 py-1 text-sm rounded-l-full"
//         />
//         <button
//           onClick={() => fetchSearchResults(searchQuery)}
//           className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100 text-sm"
//         >
//           🔍
//         </button>
//         <MicButton
//           onVoiceResult={(spokenText) => {
//             setSearchQuery(spokenText);
//             fetchSearchResults(spokenText);
//           }}
//         />
//       </div>

//       {showSuggestions && suggestions.length > 0 && (
//         <div className="absolute bg-white py-2 px-2 w-full shadow-lg rounded-lg border mt-1 z-10">
//           <ul>
//             {suggestions.map((s) => (
//               <li
//                 key={s}
//                 className="py-1 px-3 text-sm hover:bg-gray-100 cursor-pointer"
//                 onMouseDown={() => fetchSearchResults(s)}
//               >
//                 🔍 {s}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
