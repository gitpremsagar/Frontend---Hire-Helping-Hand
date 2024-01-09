import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomLevelCategoryLi from "./BottomLevelCategoryLi";
import {
  asideLeftSlice,
  setClickedMidLevelCategory,
} from "./../../../redux/asideLeftSlice";

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

  //get the name of the clicked mid_level_category from redux store
  const clickedMidLevelCategory = useSelector(
    (state) => state.asideLeftSlice.clickedMidLevelCategory
  );

  useEffect(() => {
    if (clickedMidLevelCategory === "") return;

    clickedMidLevelCategory === midLevelCategory.name
      ? setshowBottomLevelCategoriesList(true)
      : setshowBottomLevelCategoriesList(false);

    // console.log("Clicked Mid Cat = ", clickedMidLevelCategory);
  }, [clickedMidLevelCategory]);

  // store clicked mid level category name in the store
  const dispatch = useDispatch();
  function handleMidLevelCategoryClick() {
    dispatch(setClickedMidLevelCategory(midLevelCategory.name));
    toggleBottomLevelCategoriesList();
  }
  //state to toggle list of bottom_level_categories
  const [showBottomLevelCategoriesList, setshowBottomLevelCategoriesList] =
    useState(false);

  function toggleBottomLevelCategoriesList() {
    setshowBottomLevelCategoriesList(!showBottomLevelCategoriesList);
  }
  return (
    <li>
      <div onClick={handleMidLevelCategoryClick} className=" cursor-pointer">
        <span className="text-green-500 hover:text-green-300 px-3 py-2 block text-xs font-bold">
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
