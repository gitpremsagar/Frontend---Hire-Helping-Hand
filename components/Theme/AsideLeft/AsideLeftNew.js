import Link from "next/link";
import { categoriesObject } from "../../CategoriesSection/categoriesObject";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RightArrowIcon } from "../../svg/heroicons";
import axios from "axios";
import {
  BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
} from "../../../Services/envVars";
import { useDispatch, useSelector } from "react-redux";
import {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} from "../../../redux/categoriesSlice";
import TopLevelCategoryLi from "./TopLevelCategoryLi";

// FIXME: Make this AsideNav work with database categories
export default function AsideLeftNew() {
  const router = useRouter();

  // fetch all categories and store it in redux store
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const [resTopCat, resMidCat, resBotCat] = await Promise.all([
        axios.get(BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES),
        axios.get(BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES),
        axios.get(BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES),
      ]);
      dispatch(setTopLevelCategories(resTopCat.data));
      dispatch(setMidLevelCategories(resMidCat.data));
      dispatch(setBottomLevelCategories(resBotCat.data));
    } catch (error) {
      console.log(error);
      alert("Error: \n" + error);
    }
  }, []);

  // get all top, mid and bottom level categories
  const allTopLevelCategories = useSelector(
    (state) => state.categories.topLevelCategories
  );

  return (
    <aside className="h-screen overflow-y-scroll bg-gray-900 text-white w-full sticky top-16">
      <nav>
        <ul>
          <h5 className="p-4 ml-4">
            <strong>SERVICES</strong>
          </h5>

          {allTopLevelCategories.map((topLevelCategory, key) => {
            return (
              <TopLevelCategoryLi
                topLevelCategory={topLevelCategory}
                key={key}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
