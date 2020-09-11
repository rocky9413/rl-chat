import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../redux/actions/skillActions';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled.section`
  position: fixed;
  background: white;
  width: 480px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid ${styledColor.lightblue};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: ${styledColor.buttonColor};
  margin: 20px;
  padding: 8px 20px;
  border: 2px solid ${styledColor.buttonColor};
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  background-color: ${props => (props.goback ? styledColor.lightblue : null)};
  color: ${props => (props.goback ? styledColor.dark : styledColor.red)};
  border: 1.5px solid
    ${props => (props.goback ? styledColor.dark : styledColor.red)};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    transform: scale(1.08);
    ${props =>
      props.goback
        ? `background-color: ${styledColor.lightGrey}`
        : `box-shadow: 0 0 0 5px rgba(245, 10, 10, 0.4)`}
  }
`;

const ClearModal = ({ show, toggleShow }) => {
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  const handleClearAll = () => {
    dispatch(deleteAll()); // clear list first
    toggleShow();
  };

  const handleCancel = () => toggleShow();

  return show ? (
    <StyledBackground>
      <StyledModal>
        <p>
          Click <span style={{ color: 'red' }}>YES</span> to Clear All
        </p>
        <p>
          Click <span style={{ color: 'green' }}>Go Back</span> to Cancel
        </p>
        <StyledDiv>
          <StyledButton type="button" onClick={handleClearAll} delete>
            YES
          </StyledButton>
          <StyledButton type="button" onClick={handleCancel} goback>
            Go Back
          </StyledButton>
        </StyledDiv>
      </StyledModal>
    </StyledBackground>
  ) : null;
};

export default ClearModal;
