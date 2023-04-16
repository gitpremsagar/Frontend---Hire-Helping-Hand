import React from "react";

export default function ButtonPrimaryOutlined({ children, className }) {
  return (
    <button
      className={`px-3 py-1 border-2 border-blue-500 bg-blue-300 text-blue-600 hover:bg-blue-700 hover:text-white rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
