import { useState } from "react";
import Autosuggest from "react-autosuggest";

const suggestions = [
  { name: "apple" },
  { name: "banana" },
  { name: "cherry" },
  { name: "date" },
  { name: "elderberry" },
  { name: "fig" },
  { name: "grape" },
  { name: "honeydew" },
  { name: "imbe" },
  { name: "jackfruit" },
  { name: "kiwi" },
  { name: "lemon" },
  { name: "mango" },
  { name: "nectarine" },
  { name: "orange" },
  { name: "peach" },
  { name: "quince" },
  { name: "raspberry" },
  { name: "strawberry" },
  { name: "tangerine" },
  { name: "ugli fruit" },
  { name: "vanilla bean" },
  { name: "watermelon" },
  { name: "xigua" },
  { name: "yellow watermelon" },
  { name: "zucchini" },
  { name: "avocado" },
  { name: "blackberry" },
  { name: "cantaloupe" },
  { name: "dragonfruit" },
  { name: "elderflower" },
  { name: "feijoa" },
  { name: "grapefruit" },
  { name: "honeycrisp apple" },
  { name: "indian gooseberry" },
  { name: "jujube" },
  { name: "kiwano" },
  { name: "lime" },
  { name: "mulberry" },
  { name: "nectar" },
  { name: "papaya" },
  { name: "quince" },
  { name: "rambutan" },
  { name: "star fruit" },
  { name: "tangelo" },
  { name: "ugni" },
  { name: "violet jelly grape" },
  { name: "water apple" },
  { name: "ximenia" },
  { name: "yellow passionfruit" },
  { name: "zinfandel grape" },
];

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion, { query }) => {
  if (!suggestion) return;
  const matches = suggestion.name.match(new RegExp(`(${query})`, "gi"));
  const parts = suggestion.name.split(new RegExp(`(${query})`, "gi"));
  return (
    <div>
      {parts.map((part, i) => (
        <span
          key={i}
          style={{
            fontWeight: matches && matches.includes(part) ? "bold" : "normal",
          }}
        >
          {part}
        </span>
      ))}
    </div>
  );
};

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    setSuggestionsList(
      inputLength === 0
        ? []
        : suggestions.filter(
            (suggestion) =>
              suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
          )
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const inputProps = {
    placeholder: "Search",
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestionsList}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: "relative",
        input:
          "block w-full py-2 pl-10 pr-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300",
        suggestionsContainer:
          "absolute z-10 w-full py-1 mt-1 text-base bg-white border border-gray-200 rounded-md shadow-lg",
        suggestion: "block px-4 py-2 text-gray-900 cursor-pointer",
        suggestionHighlighted: "bg-blue-100",
      }}
    />
  );
};

export default SearchBar;
