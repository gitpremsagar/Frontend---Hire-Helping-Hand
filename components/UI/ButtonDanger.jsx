import React from "react";

export default function ButtonDanger({ children, className }) {
  function onClickHandler(e) {
    e.preventDefault();
    console.log("Delete Button got clicked!");
  }
  return (
    <button
      className={`px-3 py-1 border-2 border-red-800 bg-red-400 hover:bg-red-600 text-red-800 rounded-lg hover:text-white ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
