import React from "react";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearch }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onSearchTermChange(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
