import { useState } from "react";
import SelectMenu from "../others/Select";
import SelectMenuForCountries from "../others/SelectMenuForCountries";
import SelectOptionsOfServices from "../others/SelectOptionsOfServices";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit} className="">
      <div className="flex items-center justify-center">
        <input
          name="searchTerm"
          type="text"
          placeholder="Search freelancing services"
          className="min-w-[600px] text-gray-900 border-2 border-gray-900 p-2"
        />
        <button
          type="submit"
          className="text-white p-2 font-bold border-2 border-gray-900 bg-gray-900"
        >
          Find Freelancer
        </button>
      </div>

      <div className="mt-10 flex justify-evenly">
        <SelectMenuForCountries label="Location" />
        <SelectOptionsOfServices label="Service" />
        <SelectMenu label="Online status" />
      </div>
    </form>
  );
}
