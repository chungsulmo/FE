import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <SearchArea>
      <form>
        <label htmlFor='search'></label>
        <input type='search' id='search' required />
        <AiOutlineSearch />
      </form>
    </SearchArea>
  );
};

const SearchArea = styled.div`
  display: flex;
`;

export default Search;
