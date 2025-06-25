// src/components/Icons/MicrophoneIcon.js
import React from "react";

const MicrophoneIcon = ({
  size = 30,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zM11 21h2v-2h-2v2zM7 18h10v-2H7v2z" />
    </svg>
  );
};

export default MicrophoneIcon;
