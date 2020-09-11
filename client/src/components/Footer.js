import React from 'react';
import styled from 'styled-components';
import { styledColor } from './styledColor';
import footer from '../../images/footer.jpg';

const StyledFooter = styled.div`
  color: ${styledColor.lightblue};
  background-color: ${styledColor.dark};
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  margin: auto;
`;

// footer padding-bottom: 60px;
// react-root div height: calc(100% - 60px);

const ImgFooter = styled.img`
  width: 860px;
  height: 50px;
  transition: all 0.3s ease-in-out;
  padding: 5px 0px 0px 0px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(75, 175, 225, 0.22) 5px 10px 20px 5px;
    transform: translate3d(0px, -3px, 0px);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ImgFooter src={footer} alt="Rocky Lin" />
    </StyledFooter>
  );
};

export default Footer;
