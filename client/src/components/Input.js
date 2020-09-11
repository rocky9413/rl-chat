import React from 'react';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledForm = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

const Input = ({ message, setMessage, sendMessage }) => {
  const inputChange = (e) => {
    setMessage(e.target.value);
  };

  const keyPress = (e) => (e.key === 'Enter' ? sendMessage(e) : null);

  const handleClick = (e) => sendMessage(e);

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={inputChange}
        onKeyPress={keyPress}
      />
      <StyledButton onClick={handleClick}>Send</StyledButton>
    </StyledForm>
  );
};

export default Input;
