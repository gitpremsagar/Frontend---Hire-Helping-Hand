import { categoriesObject } from "../../CategoriesSection/categoriesObject";

export default function AsideLeft() {
  return (
    <aside className="h-screen overflow-y-scroll bg-gray-800 text-white w-full sticky top-0">
      <ul>
        <li className=" px-2 py-4 hover:bg-gray-900">
          Home
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </li>
        {Object.keys(categoriesObject).map((category, key) => {
          return (
            <li key={key} className=" px-2 py-4 hover:bg-gray-900">
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
              {/* List of items within the category */}

              <ul className="ml-10 mt-5">
                {Object.keys(categoriesObject[category]).map(
                  (subCategory, key) => {
                    return (
                      <li key={key}>
                        <span className="underline underline-offset-4">
                          {subCategory}
                        </span>
                        <ul className="ml-5 mt-4 mb-4">
                          {Object.values(
                            categoriesObject[category][subCategory].map(
                              (serivceList, key) => {
                                return <li key={key}>* {serivceList}</li>;
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
    </aside>
  );
}
