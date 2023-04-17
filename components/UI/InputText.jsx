import React from "react";

export default function InputText({
  name,
  placeholder,
  className,
  onChangeHandler,
  inputRef,
}) {
  return (
    <input
      name={name}
      id={`${name}_id`}
      type="text"
      onChange={onChangeHandler}
      className={`px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500 ${className}`}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
}
