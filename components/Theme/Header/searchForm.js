import { useState } from "react";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit} className="flex items-center">
      <input
        name="searchTerm"
        type="text"
        placeholder="Search services"
        className="py-1 px-2 min-w-[600px] text-gray-900"
      />
      <button type="submit" className="ml-5 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
}
