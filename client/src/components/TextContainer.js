import React from 'react';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: white;
  height: 60%;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  margin-bottom: 0px;
`;

const StyledActive = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;
`;

const StyledMember = styled.div`
  display: flex;
  align-items: center;
`;

// @media (min-width: 320px) and (max-width: 1200px) {
//   .textContainer {
//     display: none;
//   }
// }

// scroll to bottom
const TextContainer = ({ users }) => {
  const clickShowMember = () => {
    // console.log('members = ');
  };

  const showUsers = users ? (
    <div>
      <StyledH1 onClick={clickShowMember}>
        Group Chat <span>{`(${users.length})`}</span>
      </StyledH1>
      <StyledActive>
        <h2>
          {users.map(({ name }) => (
            <StyledMember key={name}>{name}</StyledMember>
          ))}
        </h2>
      </StyledActive>
    </div>
  ) : null;

  return (
    <StyledDiv>
      <div>
        <p>Realtime Chat App</p>
        <p>Created with React, Express, Node and Socket.IO</p>
        <p>Try it out right now!</p>
      </div>
      {showUsers}
    </StyledDiv>
  );
};

export default TextContainer;
