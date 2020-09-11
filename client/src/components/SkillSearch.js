import React, { useState, useEffect, useRef } from 'react';
// import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addSkill } from '../redux/actions/skillActions';

import NoResult from './NoResult';
import { skills } from '../content/skillList';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 10px;
  height: 20px;
  width: 500px;
  margin: 10px auto;
  border: 1.5px solid ${styledColor.buttonColor};
  border-radius: 3px;
  font-size: 18px;
  text-transform: capitalize;
  &:focus {
    outline: none;
    border: 1.5px solid ${styledColor.lightblue};
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: goldenrod;
  background-color: whitesmoke;
  left: 170px;
  top: 52px;
  width: 518px;
`;

const StyledDropdownList = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    background-color: ${styledColor.lightblue};
  }
`;

const SkillSearch = () => {
  // local state to control search bar
  const [display, setDisplay] = useState(false);
  const [dropList, setDropList] = useState([]);
  const [search, setSearch] = useState('');
  const [allowQuery, setAllowQuery] = useState(false);
  const [inputErr, setInputErr] = useState(false);

  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  const inputRef = useRef(null);

  // handle mouse click outside of search box
  const wrapperRef = useRef(null);
  // handle mouse click outside of search box
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  });
  // handle mouse click outside of search box
  const handleClickOutside = event => {
    const { current } = wrapperRef;
    if (current && !current.contains(event.target)) {
      setDisplay(false);
      // setSearch('');
    }
  };

  // display drop down list onChange by search bar input
  useEffect(() => {
    const searchResults = []; // store query results
    if (search.length && allowQuery) {
      // search through content for matching substring items
      skills.forEach(elem => {
        if (elem.skill.toLowerCase().includes(search.toLowerCase())) {
          searchResults.push(elem);
        }
      });
      setDisplay(true); // turn on display drop down
      setDropList(searchResults);
    }
  }, [search, allowQuery]); // onChange trigger query

  const handleInputChange = e => {
    setAllowQuery(true);
    setDisplay(false); // turn off dropdown list
    setSearch(e.target.value); // set search bar value
    setInputErr(false);
  };

  const handleEscape = e => {
    if (e.keyCode === 27) {
      setDisplay(false);
      setSearch('');
    }
  };

  const handleInputClick = () => setDisplay(true);

  const handleClickAddSkill = e => {
    setSearch(''); // setSearch(e.target.title);
    setAllowQuery(false); // avoid re-render after click
    setDisplay(false); // turn off dropdown list

    const clickResult = dispatch(addSkill(e.target.id)); // dispatch addSkill action by movie id
    clickResult.then(result =>
      result !== undefined ? setInputErr(true) : null
    );
  };

  const showDropDown = dropList.map((elem, i) => (
    <StyledDropdownList
      id={elem.id}
      onClick={handleClickAddSkill}
      key={i}
      tabIndex="0"
    >
      {elem.skill}
    </StyledDropdownList>
  ));

  return (
    <StyledDiv ref={wrapperRef}>
      <StyledInput
        ref={inputRef}
        autoComplete="off"
        placeholder="Search for Rocky's skillset:"
        type="text"
        name="search"
        onKeyDown={handleEscape}
        onClick={handleInputClick}
        onChange={handleInputChange}
        onMouseEnter={() => inputRef.current.focus()}
        value={search}
      />

      {inputErr ? <NoResult /> : null}

      {display && <StyledDropdown>{showDropDown}</StyledDropdown>}
    </StyledDiv>
  );
};

export default SkillSearch;

// SkillSearch.propTypes = {
//   addSkill: propTypes.func.isRequired,
// };

// export default connect(null, { addSkill })(SkillSearch);
