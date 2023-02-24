// this version gives auto suggestion while entering search term
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

const SearchPage = () => {
  const router = useRouter();
  const { q, searchLocation, searchServiceType } = router.query;

  const [searchTerm, setSearchTerm] = useState(q || "");
  const [location, setLocation] = useState(searchLocation || "any");
  const [serviceType, setServiceType] = useState(searchServiceType || "all");
  const [suggestions, setSuggestions] = useState([]);

  // Update URL whenever form data changes
  //   useEffect(() => {
  //     const query = {};
  //     if (searchTerm) {
  //       query.q = searchTerm;
  //     }
  //     if (location) {
  //       query.searchLocation = location;
  //     }
  //     if (serviceType) {
  //       query.searchServiceType = serviceType;
  //     }
  //     router.push({
  //       pathname: "/search",
  //       query,
  //     });
  //   }, [searchTerm, location, serviceType]);

  // Function to get search term suggestions
  const getSuggestions = async (value) => {
    // Make axios request to get search term suggestions
    try {
      const response = await axios.get(
        `/api/search/suggestions?searchTerm=${value}`
      );
      // Set suggestions state to response data
      setSuggestions(response.data);
    } catch (error) {
      console.log("error in fetching suggestions = ", error);
    }
  };

  // Function to render suggestion item
  const renderSuggestion = (suggestion) => {
    return <div>{suggestion}</div>;
  };

  // Autosuggest input props
  const inputProps = {
    placeholder: "Find freelancers",
    className: "mr-20",
    value: searchTerm,
    onChange: (event, { newValue }) => {
      setSearchTerm(newValue);
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UPDATE url whenever search form is submited
    router.push(
      `/search?q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
            onSuggestionsClearRequested={() => setSuggestions([])}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="mx-4 px-2 py-1 border border-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Service Type"
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
            className="mx-4 px-2 py-1 border border-gray-400 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
