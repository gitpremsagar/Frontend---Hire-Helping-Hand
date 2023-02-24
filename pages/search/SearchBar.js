import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const SearchBar = ({ searchQuery }) => {
  const [value, setValue] = useState("");
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
      <span>
        {parts.map((part, index) => {
          const className = part.highlight ? "font-bold" : null;
          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  };

  const inputProps = {
    placeholder: "Search...",
    value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
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
    />
  );
};

export default SearchBar;
