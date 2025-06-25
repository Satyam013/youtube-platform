import VideoCard from "./VideoCard";

const AdVideoCard = ({ info }) => {
  const link = info?.snippet?.link || "#";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="w-full sm:w-[310px] rounded-lg overflow-hidden bg-yellow-50 shadow-md border border-yellow-300">
        <VideoCard info={info} isAd={true} />
      </div>
    </a>
  );
};
export default AdVideoCard;
