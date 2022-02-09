export default function AsideLeft() {
  return (
    <aside className="h-screen overflow-y-scroll bg-gray-800 text-white w-full sticky top-0">
      <ul className="">
        {[
          "Home",
          "Design & Graphics",
          "Web Devlopment",
          "App Development",
          "Writing",
          "Digital Marketing",
          "Video & Audio",
          "Business",
          "Trending",
        ].map((category, key) => {
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
              {category !== "Home" ? (
                <ul className="ml-8 h-0 overflow-hidden">
                  {["item 1", "item 2", "item 3", "item 4"].map(
                    (categoryItem, key) => {
                      return <li key={key}>{categoryItem}</li>;
                    }
                  )}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
