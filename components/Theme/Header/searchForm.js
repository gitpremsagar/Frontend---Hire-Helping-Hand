import { useState } from "react";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit}>
      <input
        name="searchTerm"
        type="text"
        placeholder="Search services"
        className="py-1 px-2 min-w-[600px] text-gray-900"
      />
      <button type="submit" className="ml-5 font-bold">
        Search
      </button>
    </form>
  );
}
