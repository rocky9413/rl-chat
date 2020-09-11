import React from 'react';
// import propTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll, showAll } from '../redux/actions/skillActions';
import SkillList from './SkillList';
import useToggler from '../hooks/useToggler';
import ClearModal from './ClearModal';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledSkillMenu = styled.div`
  padding: 0px 10px 0px 10px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const StyledButton = styled.button`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => (props.show ? styledColor.lightblue : null)};
  color: ${(props) => (props.show ? styledColor.buttonColor : styledColor.red)};
  border: 1.5px solid
    ${(props) => (props.show ? styledColor.buttonColor : styledColor.red)};
  &:hover {
    cursor: pointer;
    box-shadow: rgba(75, 175, 225, 0.22) 3px 8px 8px 3px;
    transform: translate3d(0px, -1px, 0px);
  }
  &:focus {
    outline: none;
    ${(props) =>
      props.show
        ? `box-shadow: 5px 4px 8px yellow, -5px 4px 8px lime, -5px -4px 8px blue,
    5px -4px 8px red`
        : `box-shadow: 0 0 0 5px rgba(245, 10, 10, 0.4)`}
  }
`;

const SkillMenu = () => {
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions
  const [show, toggleShow] = useToggler(false);

  const handleShowAll = () => {
    dispatch(deleteAll()); // clear list first
    dispatch(showAll()); // show all to list
  };

  return (
    <StyledSkillMenu>
      <StyledRow>
        <h2>Technical Skills:</h2>
        <StyledButton type="button" onClick={handleShowAll} show>
          Show All Skills
        </StyledButton>
        <StyledButton type="button" onClick={toggleShow} cancel>
          Clear Skills Below
        </StyledButton>
      </StyledRow>
      <SkillList />
      <ClearModal show={show} toggleShow={toggleShow} />
    </StyledSkillMenu>
  );
};

export default SkillMenu;
