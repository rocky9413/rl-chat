import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { styledColor } from './styledColor';
import RL from '../../images/RL.jpg';
import { intro, certification, talks } from '../content/intro';
import useToggler from '../hooks/useToggler';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const StyledHeader = styled.div`
  color: ${styledColor.lightblue};
  background-color: ${styledColor.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 860px;
  margin: auto;
`;

const ImgRL = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  transition: all 0.3s ease-in-out;
  margin: 18px 2px;
  padding: 10px 2px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(75, 175, 225, 0.22) 5px 10px 20px 5px;
    transform: translate3d(0px, -3px, 0px);
  }
`;

const StyledBios = styled.div`
  color: ${styledColor.lightGrey};
  width: 640px;
`;

const Header = () => {
  const [bios, toggleBios] = useToggler(false);

  const showBios = bios ? (
    <StyledBios>
      <p>{intro}</p>
      <p>{talks}</p>
      <p>{certification}</p>
      <br></br>
    </StyledBios>
  ) : null;

  const Linkedin = (
    <a href="https://www.linkedin.com/in/rocky-lin" target="_blank">
      <LinkedInIcon style={{ fontSize: 46, color: '#61dafb' }} />
    </a>
  );

  const GitHub = (
    <a href="https://github.com/rocky9413" target="_blank">
      <GitHubIcon style={{ fontSize: 42, color: '#61dafb' }} />
    </a>
  );

  return (
    <>
      <StyledHeader>
        <StyledGrid>
          <h1>Rocky Lin</h1>
          {Linkedin}
          <ImgRL src={RL} alt="Rocky Lin" onClick={toggleBios} />
          {GitHub}
          <h3>Software Engineer</h3>
        </StyledGrid>
        {showBios}
      </StyledHeader>
    </>
  );
};

export default Header;

// const mapStateToProps = (state) => ({
//   avgBudget: state.mvStore.avgBudget,
// });
// const mapDispatchToProps = (dispatch) => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
