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
import useSWR from "swr";

// FIXME: Make this AsideNav work with database categories
export default function AsideLeftNew() {
  const router = useRouter();

  // fetch all categories and store it in redux store
  const dispatch = useDispatch();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    [
      BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
      BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES,
      BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES,
    ],
    () =>
      Promise.all([
        fetcher(BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES),
        fetcher(BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES),
        fetcher(BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES),
      ])
  );

  if (error) console.log("error in fetching data");
  if (!data) console.log("Loading...");

  // console.log(data);
  // const [resTopCat, resMidCat, resBotCat] = data;
  useEffect(() => {
    if (!data) return;

    dispatch(setTopLevelCategories(data[0]));
    dispatch(setMidLevelCategories(data[1]));
    dispatch(setBottomLevelCategories(data[2]));
  }, [data]);

  // get all top level categories
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
