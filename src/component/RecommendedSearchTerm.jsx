import React from "react";
import useGetSick from "../hook/useGetSick";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const TermList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TermItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: lightgray;
  `}
`;

const SearchIcon = styled(FiSearch)`
  margin-right: 8px;
`;

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
      <TermList>
        <TermItem isSelected={true}>
          <SearchIcon />

          <span>{searchTerm}</span>
        </TermItem>
        {recommendedTerms.map((term, index) => (
          <TermItem
            key={index}
            isSelected={false}
            onClick={() => handleSearchTermSelect(term)}
          >
            <SearchIcon />
            <span>{term}</span>
          </TermItem>
        ))}
      </TermList>
    </div>
  );
};

export default RecommendedSearchTerm;
