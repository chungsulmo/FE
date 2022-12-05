import React from 'react';
import styled from 'styled-components';

const RentalHouse = () => {
  const [houseNumber, setHouseNumber] = React.useState(0);

  return (
    <RentalWrap>
      <SortingHouse>
        <span>마감임박</span>
        <span style={{ fontWeight: 700 }}>{houseNumber}</span>
      </SortingHouse>
      <SortingHouse>
        <span>찜목록</span>
        <span style={{ fontWeight: 700 }}>{houseNumber}</span>
      </SortingHouse>
      <SortingHouse>
        <span>역세권 청년주택</span>
        <span style={{ fontWeight: 700 }}>{houseNumber}</span>
      </SortingHouse>
      <SortingHouse>
        <span>행복주택</span>
        <span style={{ fontWeight: 700 }}>{houseNumber}</span>
      </SortingHouse>
    </RentalWrap>
  );
};

const RentalWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-width: 390px;
  min-height: 225px;
  background: #dde8ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 40px 0;
  padding: 35px;
`;

const SortingHouse = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  font-size: 22px;
`;

export default RentalHouse;
