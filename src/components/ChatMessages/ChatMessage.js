import React from "react";
import { USER_LOGO } from "../../utils/constants/imagesConstant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="w-full flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src={USER_LOGO} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
