import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <SearchArea>
      <label htmlFor='search'></label>
      <input type='search' id='search' required />
      <AiOutlineSearch size='30' color='#3bb8d3' />
    </SearchArea>
  );
};

const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 10px;
  border: 1px solid #3bb8d3;z
  border-radius: 40px;
  min-width: 400px;

  & > input {
    border: none;
    margin-right: 10px;
  }
`;

export default Search;
