import React from "react";
import TncStar from "./tncStar";

export default function InputInfoSpan({ children }) {
  return (
    <span className="text-gray-400 block text-xs sm:text-sm md:text-base">
      <TncStar />
      {children}
    </span>
  );
}
