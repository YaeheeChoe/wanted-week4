import React from "react";
import useGetSick from "../hook/useGetSick";

const RecommendedSearchTerm = ({ searchTerm, onSearchTermSelect }) => {
  const { data, error } = useGetSick(searchTerm);

  const getRecommendedTerms = () => {
    if (error) {
      // 에러 처리 로직
      return [];
    }

    if (!data) {
      // 데이터 로딩 중 처리 로직
      return [];
    }

    // 실제 추천 검색어를 가져오는 로직을 구현합니다.
    // data를 사용하여 추천 검색어를 생성하거나 가공할 수 있습니다.
    const recommendedTerms = data.map((item) => item.sickNm);
    return recommendedTerms;
  };

  const recommendedTerms = getRecommendedTerms();

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
