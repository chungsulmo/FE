import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <>
      <ProfileImg />
    </>
  );
};

export default Profile;

const ProfileImg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #ddd;
`;
