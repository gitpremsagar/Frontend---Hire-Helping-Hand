import Link from "next/link";
import { categoriesObject } from "../../CategoriesSection/categoriesObject";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AsideLeft(props) {
  const router = useRouter();
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;

  function showListOfSubCategories(e) {
    // change background colour of clicked list item to make it look active
    const category_li = e.currentTarget.parentElement;
    category_li.classList.toggle("activeCategory");

    // show sub-category list items of clicked category
    const subCat_ul = e.currentTarget.nextElementSibling;
    subCat_ul.classList.toggle("showSubCategory");

    // collaps any other explanded sub cateogry list and make it look not active
    const allSubCategoryLists =
      document.getElementsByClassName("showSubCategory");
    Array.prototype.forEach.call(allSubCategoryLists, function (subCategoryUl) {
      if (subCategoryUl !== subCat_ul) {
        subCategoryUl.parentElement.classList.remove("activeCategory");
        subCategoryUl.classList.remove("showSubCategory");
      }
    });
  }

  return (
    <aside className="h-screen overflow-y-scroll bg-gray-800 text-white w-full sticky top-16">
      <nav>
        <ul>
          <h5 className="p-4 ml-4">
            <strong>SERVICES</strong>
          </h5>

          {/* render list of services in Aside Left navigation */}
          {Object.keys(categoriesObject).map((category, key) => {
            return (
              <li
                key={key}
                className={
                  router.query.serviceCategory &&
                  category === router.query.serviceCategory
                    ? `hover:bg-gray-900 activeCategory`
                    : `hover:bg-gray-900`
                }
              >
                <div
                  onClick={showListOfSubCategories}
                  className="px-2 py-4 cursor-pointer"
                >
                  {/* Category icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 float-left mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {category}
                  {/* Arrow right icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 float-right"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* List of items within the category */}

                <ul
                  className={
                    router.query.serviceCategory &&
                    category === router.query.serviceCategory
                      ? `subCategory showSubCategory`
                      : `subCategory`
                  }
                >
                  {Object.keys(categoriesObject[category]).map(
                    (subCategory, key) => {
                      return (
                        <li key={key}>
                          <span className="underline underline-offset-4 text-yellow-300">
                            {subCategory}
                          </span>
                          <ul className="ml-5 mt-4 mb-4">
                            {Object.values(
                              categoriesObject[category][subCategory].map(
                                (serivceName, key) => {
                                  return (
                                    <li key={key}>
                                      <Link
                                        href={
                                          isUserFreelancer
                                            ? `/services/${category}/${serivceName}?useHireHelpingHandAs=freelancer`
                                            : `/services/${category}/${serivceName}`
                                        }
                                      >
                                        <a className="block p-2 hover:bg-gray-500 rounded">
                                          {serivceName}
                                        </a>
                                      </Link>
                                    </li>
                                  );
                                }
                              )
                            )}
                          </ul>
                        </li>
                      );
                    }
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
