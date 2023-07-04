import { useRouter } from "next/router";
import React from "react";

export default function Li({ children }) {
  const router = useRouter();
  const pathname = router.pathname;
  const currentPage = pathname.split("/").pop();
  const lowerCaseChildren = children.toLowerCase();
  console.log("current page = ", currentPage);
  const conditionalClass =
    currentPage == lowerCaseChildren ? "bg-gray-700" : null;
  console.log(conditionalClass);
  return (
    <li
      className={`px-3 py-2 rounded mx-1 my-1  hover:bg-gray-600 ${conditionalClass}`}
    >
      {children}
    </li>
  );
}
