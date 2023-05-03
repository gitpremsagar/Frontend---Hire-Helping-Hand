import React, { useEffect, useState } from "react";
import { RightArrowIcon } from "../../svg/heroicons";
import { useDispatch, useSelector } from "react-redux";
import MidLevelCategoryLi from "./MidLevelCategoryLi";
import { setClickedTopLevelCategory } from "../../../redux/asideLeftSlice";

export default function TopLevelCategoryLi({ topLevelCategory }) {
  const [showMidLevelCategories, setshowMidLevelCategories] = useState(false);

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

  //   get the clicked top level category name from the redux store
  const clickedTopLevelCategory = useSelector(
    (state) => state.asideLeftSlice.clickedTopLevelCategory
  );

  // if clickedTopLevelCategory is equal to the present topLevelCategory then show mid level categories belonging to this topLevelCategory
  useEffect(() => {
    if (clickedTopLevelCategory === "") return;

    clickedTopLevelCategory === topLevelCategory
      ? setshowMidLevelCategories(true)
      : setshowMidLevelCategories(false);
  }, [clickedTopLevelCategory]);

  //   store clicked top level categories name in the redux store
  const dispatch = useDispatch();
  const handleTopLevelCategoryClick = () => {
    dispatch(setClickedTopLevelCategory(topLevelCategory));
    setshowMidLevelCategories(!showMidLevelCategories);
  };

  const transitionDuration = `duration-1000`;

  return (
    <li
      className={`transition-colors ${transitionDuration} ${
        showMidLevelCategories ? `bg-gray-900` : ``
      }`}
    >
      <div
        onClick={handleTopLevelCategoryClick}
        className="flex items-center justify-between hover:bg-gray-900 hover:cursor-pointer px-3 py-5"
      >
        <span>{topLevelCategory.name}</span>
        <RightArrowIcon
          className={` transition-all ${transitionDuration} ${
            showMidLevelCategories ? `-rotate-90 ` : `rotate-90 `
          }`}
        />
      </div>
      <ul
        className={`overflow-hidden transition-all ${transitionDuration} ${
          showMidLevelCategories ? `max-h-[3000px]` : `max-h-[0px]`
        }`}
      >
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
