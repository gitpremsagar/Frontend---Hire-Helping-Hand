import React from "react";
import Li from "./Li";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function AsideLeft__Favourite() {
  //get current page name from url

  // get this user's ID from redux store
  const userID = useSelector((state) => state.authSlice.userid);

  return (
    <aside className="h-screen overflow-y-scroll bg-gray-900 text-white w-full sticky top-16">
      <nav>
        <ul>
          <h5 className="p-4 ml-4">
            <strong>Favourite</strong>
          </h5>

          <Link href={`/favourite/proposals/${userID}`}>
            <a>
              <Li>Proposals</Li>
            </a>
          </Link>

          <Link href={`/favourite/projects/${userID}`}>
            <a>
              <Li>Projects</Li>
            </a>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
