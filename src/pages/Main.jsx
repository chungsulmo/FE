import React from 'react';
import styled from 'styled-components';

// components
import Header from './../components/Header';

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <span>청설모님! 반가워요<br />오늘일정을 확인해주세요</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 13.25rem;
`;

export default Main;
