import React from "react";

export default function InputText({
  name,
  placeholder,
  className,
  onChangeHandler,
  inputRef,
  value,
  type,
  id,
}) {
  return (
    <input
      name={name}
      id={`${id}`}
      type={type || `text`}
      onChange={onChangeHandler}
      className={`px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500 text-gray-800 ${className}`}
      placeholder={placeholder}
      ref={inputRef}
      defaultValue={value}
    />
  );
}
