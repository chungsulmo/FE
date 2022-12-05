import { React } from 'react';
import styled from 'styled-components';

import { BsCalendar4Range } from 'react-icons/bs';

// components
import Search from './Search';
import Profile from './Profile';

const Header = () => {
  return (
    <Headers>
      <img src='/assets/chungsulmo_logo.svg' alt='청설모 로고' height='40px' />
      <BsCalendar4Range size='30' color='#3bb8d3'/>
      <Search />
      <Profile />
    </Headers>
  );
};

const Headers = styled.div`
  /* display: flex; */
`;

export default Header;
