import React from "react";

export default function KeyFeaturesCard({ children, className }) {
  return (
    <div
      className={`px-2 py-10 m-2 w-full border bottom-1 rounded-lg text-center text-white font-bold ${className}`}
    >
      {children}
    </div>
  );
}
