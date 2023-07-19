import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecommendedSearchTerm from "./RecommendedSearchTerm";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchTermSelect = (selectedTerm) => {
    setSearchTerm(selectedTerm);
  };
  const handleSearch = () => {
    // 검색 로직을 수행하고 검색 결과를 처리하는 코드
    window.location.href =
      "https://clinicaltrialskorea.com/studies?conditions=" + searchTerm;
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSearch={handleSearch}
      />
      <RecommendedSearchTerm
        searchTerm={searchTerm}
        onSearchTermSelect={handleSearchTermSelect}
      />
    </div>
  );
};

export default Search;
