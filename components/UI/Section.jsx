import React from "react";

export default function Section({ children, className }) {
  return (
    <section className={`p-5 md:p-10 lg:p-20 ${className}`}>{children}</section>
  );
}
