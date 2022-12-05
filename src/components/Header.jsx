import { React } from 'react';
import styled from 'styled-components';

import { BsCalendar4Range } from 'react-icons/bs';

// components
import Search from './Search';
import Profile from './Profile';

const Header = () => {
  return (
    <Headers>
      <h1>
        <img src='/assets/chungsulmo_logo.svg' alt='청설모 로고' height='40px' />
      </h1>
      <PersonalArea>
        <Search />
        <BsCalendar4Range size='30' color='#3bb8d3' />
        <Profile />
      </PersonalArea>
    </Headers>
  );
};

const Headers = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const PersonalArea = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
`;

export default Header;
