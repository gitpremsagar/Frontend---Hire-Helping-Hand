import React from "react";

export default function NestedLi({ children }) {
  return (
    <li className="cursor-pointer hover:bg-gray-700 px-2 py-2 ml-2">{children}</li>
  );
}
