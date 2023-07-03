import React from "react";
import TopLevelCategoryLi from "../Theme/AsideLeft/TopLevelCategoryLi";
import Li from "./Li";

export default function AsideLeft__Favourite() {
  return (
    <aside className="h-screen overflow-y-scroll bg-gray-900 text-white w-full sticky top-16">
      <nav>
        <ul>
          <h5 className="p-4 ml-4">
            <strong>Favourite</strong>
          </h5>

          <Li>Proposal</Li>
          <Li>Project</Li>
        </ul>
      </nav>
    </aside>
  );
}
