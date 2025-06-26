import VideoCard from "./VideoCard";

const AdVideoCard = ({ info }) => {
  const link = info?.snippet?.link || "#";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="w-full sm:w-[310px] rounded-lg overflow-hidden  shadow-md   bg-white dark:bg-gray-900 text-black dark:text-white">
        <VideoCard info={info} isAd={true} />
      </div>
    </a>
  );
};
export default AdVideoCard;
