import {
  ADD_SKILL,
  DELETE_SKILL,
  DELETE_ALL,
  SHOW_ALL
} from '../actions/types';

const initialState = {
  skills: [],
  experience: []
};

const skillReducer = (state = initialState, action) => {
  let len = state.skills.length;
  let newlist;

  switch (action.type) {
    case ADD_SKILL:
      newlist = [...state.skills];
      let checkId = undefined;
      checkId = state.skills.find(el => el.id === action.payload.id);
      if (checkId === undefined) {
        len = len + 1;
        newlist.push(action.payload);
      }
      return {
        ...state,
        skills: newlist
      };
    case DELETE_SKILL:
      len = len - 1;
      newlist = state.skills.filter(
        skill => Number(skill.id) !== Number(action.payload)
      );
      return {
        ...state,
        skills: newlist
      };
    case DELETE_ALL:
      return initialState;
    case SHOW_ALL:
      newlist = [];
      action.payload.map(data => newlist.push(data));
      return {
        skills: newlist
      };
    default:
      return state;
  }
};

export default skillReducer;
