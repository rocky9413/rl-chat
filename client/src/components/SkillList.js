import React from 'react';
// import propTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSkill } from '../redux/actions/skillActions';
import SkillCard from './SkillCard';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledMsg = styled.p`
  color: ${styledColor.fontColor};
  font-size: 16px;
  font-weight: 600;
  padding: 0px 20px;
`;

const SkillList = () => {
  // grab skills state from redux store by useSelector hook
  const { skills } = useSelector(state => state.mySkills);
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  // handle delete by id
  const handleDelete = e => dispatch(deleteSkill(e.target.id));

  const showSelectedSkills =
    skills && skills.length ? (
      skills.map((elem, i) => {
        return (
          <SkillCard
            key={i}
            id={elem.id}
            skill={elem.skill}
            handleDelete={handleDelete}
          />
        );
      })
    ) : (
      <StyledMsg>
        - Click button to show all or search skillset at input above
      </StyledMsg>
    );

  return showSelectedSkills;
};

export default SkillList;

// Old connect HOC
// might be easier to test react component instead of using redux hook

// SkillList.propTypes = {
//   deleteSkill: propTypes.func.isRequired,
//   movies: propTypes.array.isRequired,
//   newMv: propTypes.object,
// };

// const mapStateToProps = (state) => ({
//   movies: state.mvStore.movies,
//   newMv: state.mvStore.newMv,
// });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ deleteSkill }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
