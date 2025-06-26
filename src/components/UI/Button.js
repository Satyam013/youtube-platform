// src/components/ui/Button.js
import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`font-medium rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;
