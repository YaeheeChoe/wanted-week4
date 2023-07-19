import React from "react";
import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";

const RootCont = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid blue;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 8px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: blue;
`;

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
    <RootCont>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={onSearch}>
        <FiSearch />
      </Button>
    </RootCont>
  );
};

export default SearchBar;
