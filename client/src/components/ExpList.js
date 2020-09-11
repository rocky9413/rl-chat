import React from 'react';
import useToggler from '../hooks/useToggler';

import styled from 'styled-components';
import { styledColor } from './styledColor';

import ArrowDown from '@material-ui/icons/ExpandMore';
import ArrowRight from '@material-ui/icons/ChevronRight';

const StyledDiv = styled.div`
  width: 760px;
  margin: auto;
`;

const StyledTitle = styled.div`
  background-color: ${styledColor.lightGrey};
  color: ${styledColor.fontColor};
  font-size: 18px;
  font-weight: 700;
  padding: 0px 10px;
  display: flex;
  flex-flow: row wrap;
  &:hover {
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  background-color: ${styledColor.backgroundWhite};
  // color: ${styledColor.dark};
  margin: 0;
`;

const StyledLi = styled.li`
  padding: 3px;
  margin: 2px;
  font: 16px Arial, sans-serif;
`;

const ExpList = ({ show, title, lists }) => {
  const [display, toggleDisplay] = useToggler(false);

  const listExp = lists.map((elem, i) => <StyledLi key={i}>{elem}</StyledLi>);

  const showTitle = (
    <StyledTitle onClick={toggleDisplay}>
      {display ? (
        <ArrowDown style={{ fontSize: 26 }} />
      ) : (
        <ArrowRight style={{ fontSize: 26 }} />
      )}{' '}
      {title}
    </StyledTitle>
  );

  return (
    <StyledDiv>
      {show ? showTitle : null}
      {display ? <StyledList> {listExp}</StyledList> : null}
    </StyledDiv>
  );
};

export default ExpList;
