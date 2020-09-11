import { ADD_SKILL, DELETE_SKILL, DELETE_ALL, SHOW_ALL } from './types';

export const addSkill = id => async dispatch => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
    // body: JSON.stringify({ id })
  };
  try {
    const response = await fetch(`/api/getOne/${id}`, options);
    const data = await response.json();
    // console.log('data =>', id, data);

    if (data.id >= 0 && data.id <= 36) {
      dispatch({ type: ADD_SKILL, payload: data });
    } else {
      return { status_code: 34 };
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteSkill = id => dispatch => {
  dispatch({ type: DELETE_SKILL, payload: id });
};

export const deleteAll = () => dispatch => {
  dispatch({ type: DELETE_ALL });
};

export const showAll = () => async dispatch => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  };
  try {
    const response = await fetch('/api/getAll', options);
    const data = await response.json();
    // console.log('data =>', data);
    if (data.length) {
      dispatch({ type: SHOW_ALL, payload: data });
    } else {
      return { status_code: 34 };
    }
  } catch (err) {
    console.log(err);
  }
};
