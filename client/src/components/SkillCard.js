import React, { useEffect } from 'react';
import useToggler from '../hooks/useToggler';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledCard = styled.div`
  background-color: ${styledColor.lightGrey};
  width: 258px;
  padding: 0px 5px;
  margin: 5px;
  font-size: 14px;
  float: left;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgba(184, 196, 194, 0.25);
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 10px 20px;
    transform: translate3d(0px, -1px, 0px);
  }
`;

const StyledP = styled.p`
  padding: 0px 5px;
  font-weight: 600;
`;

const StyledButton = styled.button`
  color: ${styledColor.red};
  text-align: center;
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  border: 1px solid ${styledColor.red};
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(10, 150, 50, 0.25) 5px 10px 15px 5px;
    transform: translate3d(0px, -2px, 0px);
  }
`;

const SkillCard = ({ id, skill, handleDelete }) => {
  const [button, toggleButton] = useToggler(false);

  // useEffect(() => {
  //   window.addEventListener('mouseenter', toggleButton);
  //   return () => window.removeEventListener('mouseleave', toggleButton);
  // });

  const showButton = button ? (
    <StyledButton type="button" id={id} onClick={handleDelete}>
      X
    </StyledButton>
  ) : null;

  return (
    <StyledCard onClick={toggleButton}>
      <StyledP>
        <label htmlFor="skill">Skill: </label>
        <span id="skill">{skill}</span>
      </StyledP>
      {showButton}
    </StyledCard>
  );
};

export default SkillCard;
