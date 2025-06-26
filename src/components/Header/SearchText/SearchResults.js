import { useSelector } from "react-redux";
import VideoCardTrending from "../../VideoCards/VideoCardTrending";

const SearchResults = () => {
  const { results, query } = useSelector((store) => store.searchResult);

  return (
    <div className="p-4 cursor-pointer">
      <h2 className="text-xl font-semibold mb-4">
        Search results for:{" "}
        <span className="text-black-600 font-bold">{query}</span>
      </h2>
      <div className="flex flex-wrap gap-4">
        {results?.map((video) => (
          <VideoCardTrending key={video.id?.videoId || video.id} info={video} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
