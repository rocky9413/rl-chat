import React from 'react';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justifyEnd ? 'flex-end' : 'flex-start')};
  padding: 0 5%;
  margin-top: 3px;
`;

const StyledMessage = styled.div`
  background: ${(props) => (props.bgBlue ? '#2979FF' : '#F3F3F3')};
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

const StyledText = styled.p`
  color: ${(props) => (props.colorWhite ? '#ffffff' : '#353535')};
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
`;

const StyledName = styled.p`
  padding-left: ${(props) => (props.paddingLeft ? '10px' : '0')};
  padding-right: ${(props) => (props.paddingRight ? '10px' : '0')};
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`;

// .messageText img {
//   vertical-align: middle;
// }

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <StyledDiv justifyEnd>
      <StyledMessage bgBlue>
        <StyledText colorWhite>{text}</StyledText>
      </StyledMessage>
      <StyledName paddingLeft>{trimmedName}</StyledName>
    </StyledDiv>
  ) : (
    <StyledDiv justifyStart>
      <StyledName paddingRight>{user}</StyledName>
      <StyledMessage bgLight>
        <StyledText colorDark>{text}</StyledText>
      </StyledMessage>
    </StyledDiv>
  );
};

export default Message;
