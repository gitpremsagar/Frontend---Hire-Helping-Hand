import React from "react";

export default function ButtonPrimary({ children, className, onClickHandler }) {
  return (
    <button
      className={`px-3 py-2 bg-blue-500 mr-1 sm:mr-2 md:mr-3 lg:mr-3 text-xs sm:text-sm lg:text-base hover:bg-blue-600 text-white rounded-lg ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
