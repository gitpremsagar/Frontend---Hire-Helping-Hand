import React from "react";
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
  return (
    <li>
      <div className="px-3 py-2">
        <span className="text-gray-500 text-xs">{midLevelCategory.name}</span>
      </div>
      <ul>
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
