import React from "react";

export default function Li({ children }) {
  return (
    <li className="px-3 py-2 rounded mx-1 my-1 bg-gray-700 hover:bg-gray-600">
      {children}
    </li>
  );
}
