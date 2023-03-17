import React from "react";

export default function ({ onClickHandler }) {
  return (
    <button
      className="px-4 py-1 rounded-3xl text-white bg-blue-600 hover:bg-blue-800 mx-2 text-sm"
      onClick={onClickHandler}
    >
      Edit
    </button>
  );
}
