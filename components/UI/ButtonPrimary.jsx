import React from "react";

export default function ButtonPrimary({
  children,
  className,
  onClickHandler,
  type,
}) {
  return (
    <button
      className={`px-3 py-2 bg-blue-500 text-xs sm:text-sm lg:text-base hover:bg-blue-600 text-white rounded-lg ${className}`}
      onClick={onClickHandler}
      type={type}
    >
      {children}
    </button>
  );
}
