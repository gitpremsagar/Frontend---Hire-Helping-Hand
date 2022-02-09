export default function AsideLeft() {
  return (
    <aside className="h-screen overflow-y-scroll bg-gray-800 text-white w-[250px] sticky top-0 p-4">
      <ul className="space-y-10">
        {[
          "Design & Graphics",
          "Web Devlopment",
          "App Development",
          "Writing",
          "Digital Marketing",
          "Video & Audio",
          "Business",
          "Trending",
        ].map((item, key) => {
          return (
            <li key={key} className="">
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
              {item}

              <ul>
                {["item 1", "item 2", "item 3", "item 4"].map((item, key) => {
                  return <li key={key}>{item}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
