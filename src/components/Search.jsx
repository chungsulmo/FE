import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  const searchHandler = () => {
    console.log('🚀 ⁝ searchHandler ⁝ searchHandler', 'click');
  };

  return (
    <SearchArea>
      <label htmlFor='search'></label>
      <input type='search' id='search' required />
      <AiOutlineSearch size='20' color='#3bb8d3' cursor='pointer' onClick={searchHandler} />
    </SearchArea>
  );
};

const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 5px 10px;
  border: 1px solid #3bb8d3;
  border-radius: 50px;
  min-width: 300px;

  & > input {
    border: none;
    margin-right: 10px;
    min-width: 300px;
  }
`;

export default Search;
