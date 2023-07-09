import React from "react";
import Li from "./Li";

import Link from "next/link";

export default function AsideLeft__Favourite() {
  //get current page name from url

  return (
    <aside className="h-screen overflow-y-scroll bg-gray-900 text-white w-full sticky top-16">
      <nav>
        <ul>
          <h5 className="p-4 ml-4">
            <strong>Favourite</strong>
          </h5>

          <Link href={`/favourite/proposal`}>
            <a>
              <Li>Proposal</Li>
            </a>
          </Link>

          <Link href={`/favourite/project`}>
            <a>
              <Li>Project</Li>
            </a>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
