import { USER_LOGO } from "../../utils/imagesConstant";

const UserProfileIcon = () => {
  return (
    <div className="col-span-3 flex justify-end pr-4">
      <img className="h-8 w-8" alt="user" src={USER_LOGO} />
    </div>
  );
};

export default UserProfileIcon;
