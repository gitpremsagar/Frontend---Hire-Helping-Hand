import { useState } from "react";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit} className="">
      <div className="flex items-center justify-evenly">
        <input
          name="searchTerm"
          type="text"
          placeholder="Search services"
          className="min-w-[600px] text-gray-900 border-2 border-gray-900 p-2"
        />
        <button
          type="submit"
          className="text-white p-2 font-bold border-2 border-gray-900 bg-gray-900"
        >
          Search
        </button>
      </div>

      <div className="mt-5 flex justify-evenly">
        <span>Location</span>
        <select className="text-black">
          <option>India</option>
          <option>India</option>
          <option>India</option>
        </select>
        <span>Location</span>
        <select className="text-black">
          <option>India</option>
          <option>India</option>
          <option>India</option>
        </select>
        <span>Location</span>
        <select className="text-black">
          <option>India</option>
          <option>India</option>
          <option>India</option>
        </select>
      </div>
    </form>
  );
}
