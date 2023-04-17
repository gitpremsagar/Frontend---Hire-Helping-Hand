import React from "react";

export default function ButtonDanger({
  children,
  className,
  onClickHandler,
  additionalServiceIndex,
}) {
  function triggerOnClickHandler() {
    onClickHandler(additionalServiceIndex - 1);
  }
  return (
    <span
      className={`px-3 py-1 border-2 hover:cursor-pointer border-red-800 bg-red-400 hover:bg-red-600 text-red-800 rounded-lg hover:text-white ${className}`}
      onClick={triggerOnClickHandler}
    >
      {children}
    </span>
  );
}
