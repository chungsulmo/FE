import { React } from 'react';
import styled from 'styled-components';

// components
import Search from './Search';

const Header = () => {
  return (
    <Headers>
      <img src='/assets/chungsulmo_logo.svg' alt='청설모 로고' height='51px' />
      <Search />
    </Headers>
  );
};

const Headers = styled.div`
  display: flex;
`;

export default Header;
