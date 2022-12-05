import styled from 'styled-components';

const AlarmList = () => {
  return (
    <>
      <AlarmDl>
        <AlarmTitle>오늘 시작하는 공고가 있어요</AlarmTitle>
        <AlarmDesc>
          <img src='/assets/lh_alarm.svg' alt='l.h 알람' />
          <span>강동역 청년역세권주택</span>
          <span>1200세대</span>
        </AlarmDesc>
      </AlarmDl>
    </>
  );
};

const AlarmDl = styled.dl`
  display: flex;
  background-color: #ddd;
`;

const AlarmTitle = styled.dt`
  display: flex;
  font-size: 18px;
  font-weight: 700;
`;

const AlarmDesc = styled.dd``;

export default AlarmList;
