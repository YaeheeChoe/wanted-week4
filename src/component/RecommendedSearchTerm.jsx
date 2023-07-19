import React from "react";

const RecommendedSearchTerm = ({ searchTerm, onSearchTermSelect }) => {
  const getRecommendedTerms = (searchTerm) => {
    if (searchTerm === "") {
      return [];
    }

    // 실제 추천 검색어를 가져오는 로직을 구현해야 합니다.
    // 여기서는 임의로 추천 검색어를 생성하여 반환합니다.
    const recommendedTerms = [];
    for (let i = 1; i <= 5; i++) {
      recommendedTerms.push(`${searchTerm} ${i}`);
    }

    return recommendedTerms;
  };

  const recommendedTerms = getRecommendedTerms(searchTerm);

  const handleSearchTermSelect = (selectedTerm) => {
    onSearchTermSelect(selectedTerm);
  };

  return (
    <div>
      <h3>Recommended Search Terms:</h3>
      <ul>
        {recommendedTerms.map((term, index) => (
          <li key={index} onClick={() => handleSearchTermSelect(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedSearchTerm;
