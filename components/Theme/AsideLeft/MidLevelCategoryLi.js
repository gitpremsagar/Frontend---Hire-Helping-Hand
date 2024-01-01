import React, { useState } from "react";
import { useSelector } from "react-redux";
import BottomLevelCategoryLi from "./BottomLevelCategoryLi";

export default function MidLevelCategoryLi({
  midLevelCategory,
  topLevelCategory,
}) {
  const allBottomLevelCategories = useSelector(
    (state) => state.categories.bottomLevelCategories
  );

  //   filter `allBottomLevelCategories` to keep only those that belog to current `midLevelCategory`
  const filteredBottomLevelCategories = allBottomLevelCategories.filter(
    (bottomLevelcategory) =>
      bottomLevelcategory.parent_mid_level_category_id === midLevelCategory.id
  );

  //state to toggle list of bottom_level_categories
  const [showBottomLevelCategoriesList, setshowBottomLevelCategoriesList] =
    useState(false);

  function toggleBottomLevelCategoriesList() {
    setshowBottomLevelCategoriesList(!showBottomLevelCategoriesList);
  }
  return (
    <li>
      <div onClick={toggleBottomLevelCategoriesList} className="px-3 py-2">
        <span className="text-blue-500 text-xs font-bold">
          {midLevelCategory.name}
        </span>
      </div>
      {/* FIXME: following max-h-[1000px] should be max-h-fit but it will remove height transition animation*/}
      <ul
        className={`overflow-hidden transition-all duration-1000 ${
          showBottomLevelCategoriesList ? `max-h-[1000px]` : `max-h-[0px]`
        }`}
      >
        {filteredBottomLevelCategories.map((bottomLevelCategory, key) => {
          return (
            <BottomLevelCategoryLi
              bottomLevelCategory={bottomLevelCategory}
              topLevelCategory={topLevelCategory}
              key={key}
            />
          );
        })}
      </ul>
    </li>
  );
}
