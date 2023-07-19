import React, { useState, useEffect } from "react";
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
      return [];
    }

    if (!data) {
      return [];
    }

    const recommendedTerms = data.map((item) => item.sickNm);
    return recommendedTerms;
  };

  const recommendedTerms = getRecommendedTerms();

  const [selectedTermIndex, setSelectedTermIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp" && selectedTermIndex > 0) {
        setSelectedTermIndex(selectedTermIndex - 1);
      } else if (
        event.key === "ArrowDown" &&
        selectedTermIndex < recommendedTerms.length - 1
      ) {
        setSelectedTermIndex(selectedTermIndex + 1);
      } else if (event.key === "Enter") {
        const selectedTerm = recommendedTerms[selectedTermIndex];
        onSearchTermSelect(selectedTerm);
        if (selectedTerm) {
          window.location.href =
            "https://clinicaltrialskorea.com/studies?conditions=" +
            selectedTerm;
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedTermIndex, recommendedTerms, onSearchTermSelect]);

  const handleSearchTermSelect = (selectedTerm) => {
    onSearchTermSelect(selectedTerm);
    if (selectedTerm) {
      window.location.href =
        "https://clinicaltrialskorea.com/studies?conditions=" + selectedTerm;
    }
  };

  return (
    <div>
      <TermList>
        <TermItem
          isSelected={selectedTermIndex === 0}
          onClick={() => handleSearchTermSelect(searchTerm)}
        >
          <SearchIcon />
          <span>{searchTerm}</span>
        </TermItem>
        {recommendedTerms.map((term, index) => (
          <TermItem
            key={index}
            isSelected={selectedTermIndex === index + 1}
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
