import React from 'react';
import styled from 'styled-components';

// components
import Header from './../components/Header';
import RentalHouse from '../components/RentalHouse';

const Main = () => {
  const [nickName, setNickName] = React.useState('청설모');
  return (
    <Wrapper>
      <Header />
      <MainSection>
        <WelcomeSpan>
          {nickName}님! 반가워요👋
          <br />
          오늘일정을 확인해주세요
        </WelcomeSpan>
        <RentalHouse />
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 13.25rem;
  font-family: 'Pretendard Variable';
`;

const MainSection = styled.div`
  margin-top: 120px;
`;

const WelcomeSpan = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 150%;
`;

export default Main;
