import React from "react";

export default function TextareaElement({
  name,
  placeholder,
  className,
  onChangeHandler,
  textareaRef,
  value,
  rows,
}) {
  return (
    <textarea
      name={name}
      id={`${name}_id`}
      onChange={onChangeHandler}
      className={`px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500 text-gray-800 ${className}`}
      placeholder={placeholder}
      ref={textareaRef}
      defaultValue={value}
      rows={rows}
    />
  );
}
