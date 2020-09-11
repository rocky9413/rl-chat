import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import useToggler from '../hooks/useToggler';

import styled from 'styled-components';
import { styledColor } from './styledColor';

// html, body {
//   padding: 0;
//   margin: 0;
// }

// #root { height: 100vh; }
// * { box-sizing: border-box; }

// @media (min-width: 320px) and (max-width: 480px) {
//   .joinOuterContainer {
//     height: 100%;
//   }
//   .joinInnerContainer {
//     width: 90%;
//   }
// }

// button:focus { outline: 0; }

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;
`;

const StyledCol = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  width: 25%;
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const StyledInput = styled.input`
  padding: 15px;
  width: 100%;
  margin: 12px 0;
  border: 1.5px solid ${styledColor.buttonColor};
  border-radius: 5px;
  font-size: 18px;
  &:focus {
    outline: none;
    border: 1.5px solid ${styledColor.lightblue};
  }
`;

const StyledButton = styled.button`
  padding: 15px;
  width: 100%;
  margin: 12px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  // display: inline-block;
  transition: all 0.3s ease-in-out;
  background-color: ${styledColor.lightblue}; // background: #2979FF;
  color: ${styledColor.buttonColor};
  // border: 1.5px solid ${styledColor.buttonColor};
  &:hover {
    cursor: pointer;
    box-shadow: rgba(75, 175, 225, 0.22) 3px 8px 8px 3px;
    transform: translate3d(0px, -1px, 0px);
  }
  &:focus {
    outline: none;
    box-shadow: 5px 4px 8px yellow, -5px 4px 8px lime, -5px -4px 8px blue,
      5px -4px 8px red;
  }
`;

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const roomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleClick = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <StyledDiv>
      <StyledCol>
        <StyledH1>Join</StyledH1>
        <div>
          <StyledInput placeholder="Name" type="text" onChange={nameChange} />
        </div>
        <div>
          <StyledInput placeholder="Room" type="text" onChange={roomChange} />
        </div>
        <Link onClick={handleClick} to={`/chat?name=${name}&room=${room}`}>
          <StyledButton type="submit">Sign In</StyledButton>
        </Link>
      </StyledCol>
    </StyledDiv>
  );
};

export default Join;
