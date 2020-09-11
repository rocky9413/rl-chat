import React from 'react';
import { experience } from '../content/experience';
import ExpList from './ExpList';
import useToggler from '../hooks/useToggler';

import styled from 'styled-components';
import { styledColor } from './styledColor';

import ArrowDown from '@material-ui/icons/ExpandMore';
import ArrowLeft from '@material-ui/icons/ChevronLeft';

const StyledExpDiv = styled.div`
  padding: 0px 10px 0px 10px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 60px;
`;

const StyledArrow = styled.div`
  color: ${styledColor.buttonColor};
  text-align: center;
  font-weight: 700;
  padding: 9px 10px 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Experience = () => {
  const [show, toggleShow] = useToggler(false);
  const expKey = Object.keys(experience);
  const Exp = expKey.map((elem, i) => (
    <ExpList key={i} show={show} title={elem} lists={experience[elem]} />
  ));

  return (
    <StyledExpDiv>
      <StyledRow>
        <h2>Experience: </h2>
        <StyledArrow onClick={toggleShow}>
          {show ? (
            <ArrowDown style={{ fontSize: 36 }} />
          ) : (
            <ArrowLeft style={{ fontSize: 36 }} />
          )}
        </StyledArrow>
      </StyledRow>
      {show ? Exp : null}
    </StyledExpDiv>
  );
};

export default Experience;
