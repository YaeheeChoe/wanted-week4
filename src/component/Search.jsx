import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecommendedSearchTerm from "./RecommendedSearchTerm";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearch = () => {
    // 검색 로직을 수행하고 검색 결과를 처리하는 코드
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSearch={handleSearch}
      />
      <RecommendedSearchTerm searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
