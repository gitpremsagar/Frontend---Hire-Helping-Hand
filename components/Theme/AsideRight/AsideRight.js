export default function AsideRight() {
  return (
    <aside className="h-screen overflow-y-scroll w-full sticky top-14 border-2 border-gray-800 rounded">
      <h6 className=" px-2 py-4 font-bold">Online Freelancers</h6>
      <ul className="">
        {[
          "Person 1",
          "Person 2",
          "Person 3",
          "Person 4",
          "Person 5",
          "Person 6",
          "Person 7",
          "Person 8",
        ].map((category, key) => {
          return (
            <li
              key={key}
              className="text-blue-600 cursor-pointer px-2 py-4 hover:border-gray-600 border-t-2 border-b-2 border-gray-100 transition-all ease-linear"
            >
              {/* User icons */}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {category}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
