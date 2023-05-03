import React from "react";
import { RightArrowIcon } from "../../svg/heroicons";
import { useSelector } from "react-redux";
import MidLevelCategoryLi from "./MidLevelCategoryLi";

export default function TopLevelCategoryLi({ topLevelCategory }) {
  const allMidLevelCategories = useSelector(
    (state) => state.categories.midLevelCategories
  );

  //   filter `allMidLevelCategories` to keep only those that belog to current `topLevelCategory`
  const filteredMidLevelCategories = allMidLevelCategories.filter(
    (midLevelCategory) => {
      return (
        midLevelCategory.parent_top_level_category_id === topLevelCategory.id
      );
    }
  );

  return (
    <li>
      <div className="flex items-center justify-between hover:bg-gray-900 hover:cursor-pointer px-3 py-5">
        <span>{topLevelCategory.name}</span>
        <RightArrowIcon />
      </div>
      <ul>
        {filteredMidLevelCategories.map((midLevelCategory, key) => (
          <MidLevelCategoryLi
            midLevelCategory={midLevelCategory}
            key={key}
            topLevelCategory={topLevelCategory}
          />
        ))}
      </ul>
    </li>
  );
}
