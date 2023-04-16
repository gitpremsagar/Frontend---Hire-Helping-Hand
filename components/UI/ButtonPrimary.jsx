import React from "react";

export default function ButtonPrimary({ children, className, onClickHandler }) {
  return (
    <button
      className={`px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
