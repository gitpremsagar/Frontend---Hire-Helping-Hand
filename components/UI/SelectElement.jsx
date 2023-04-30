import React from "react";

export default function SelectElement({
  children,
  className,
  elementName,
  selectRef,
  id,
  disabledFlag,
  onChangeHandler,
}) {
  return (
    <select
      className={`px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500 text-gray-800 ${className}`}
      name={elementName}
      ref={selectRef}
      id={id}
      disabled={disabledFlag}
      onChange={onChangeHandler}
    >
      {children}
    </select>
  );
}
