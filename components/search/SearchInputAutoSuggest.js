import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const SearchInputAutoSuggest = ({
  searchTerm,
  setSearchTerm,
  isUserFreelancer,
}) => {
  // const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = async ({ value }) => {
    try {
      //   const response = await axios.get(`/api/suggestions?q=${value}`);
      const response = await axios.get(
        `http://localhost:4040/api/search/suggestions?q=${value}`
      );
      console.log("suggesstions from server = ", response);
      setSuggestions(response.data);
    } catch (error) {
      console.log("error in fetching seggestions = ", error);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion, { query }) => {
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

  // Autosuggest input props
  const inputProps = {
    placeholder: isUserFreelancer ? `Find Clients` : `Find Freelancers`,
    className: "min-w-[600px] text-gray-900 border-2 border-gray-900 p-2",
    value: searchTerm,
    onChange: (event, { newValue }) => {
      setSearchTerm(newValue);
    },
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: "relative",
        suggestionsContainer:
          "absolute z-10 w-full text-base bg-white border border-gray-200 rounded-md shadow-lg",
        suggestion: "block px-4 py-2 text-gray-900 cursor-pointer",
        suggestionHighlighted: "bg-blue-100",
      }}
    />
  );
};

export default SearchInputAutoSuggest;
