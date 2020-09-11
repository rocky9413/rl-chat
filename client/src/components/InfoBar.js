import React from 'react';

import styled from 'styled-components';
import { styledColor } from './styledColor';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const StyledDiv = styled.div`
  // color: ${styledColor.red};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

const StyledLeft = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

const StyledRight = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

const InfoBar = ({ room }) => {
  return (
    <StyledDiv>
      <StyledLeft>
        {/* <img src={} alt="online image" /> */}
        <h3>Group Name: {room}</h3>
      </StyledLeft>
      <StyledRight>
        <a href="/">
          <CloseRoundedIcon style={{ fontSize: 28, color: '#ffffff' }} />
        </a>
      </StyledRight>
    </StyledDiv>
  );
};

export default InfoBar;
