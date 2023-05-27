import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { envVars } from "../../Services/envVars";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const AutoSuggestInput = ({ searchTerm, setSearchTerm, isUserFreelancer }) => {
  const [suggestions, setSuggestions] = useState([]);

  async function fetchSuggestions(value) {
    try {
      // in freelancer mode request to project's suggestions api endpoint
      if (isUserFreelancer) {
        const response = await axios.get(
          `${envVars.BACKEND_API_ENDPOINT_FOR_SEARCHING_PROJECTS}/suggestions?q=${value}`
        );

        setSuggestions(response.data);
      } else {
        // in client mode request to  proposal's suggestions api endpoint
        const response = await axios.get(
          `${envVars.BACKEND_API_ENDPOINT_FOR_SEARCHING_PROPOSALS}/suggestions?q=${value}`
        );

        setSuggestions(response.data);
      }
    } catch (error) {
      console.log("error in fetching suggestions = ", error);
    }
  }

  const renderSuggestion = (suggestion, query) => {
    const matches = match(suggestion.title, query);
    const parts = parse(suggestion.title, matches);
    return (
      <div className="">
        {parts.map((part, index) => {
          const className = part.highlight ? "font-bold" : null;
          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </div>
    );
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value == "") {
      setSearchTerm("");
      setSuggestions([]);
      return;
    }
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  return (
    <div className="relative text-gray-600 w-2/3">
      <input
        autoComplete="off"
        className=" text-gray-900 border-2 border-gray-900 p-2 focus:outline-none w-full "
        type="search"
        name="search"
        placeholder={isUserFreelancer ? `Find Clients` : `Find Freelancers`}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg max-w-fit shadow-lg">
          {suggestions.map((suggestion, key) => (
            <li
              key={key}
              className="block px-4 py-2 text-gray-900 cursor-pointer hover:bg-blue-200"
              onClick={(event) => {
                setSearchTerm(event.target.textContent);
                setSuggestions([]);
              }}
            >
              {renderSuggestion(suggestion, searchTerm)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestInput;
