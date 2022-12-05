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
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: #ddd;
`;
