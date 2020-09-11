import skillReducer from '../reducers/skillReducer';

describe('skillReducer', () => {
  let iniState;
  const fakeAction = { type: 'NOT_A_REAL_ACTION' };

  beforeEach(() => {
    iniState = {
      skills: [],
      experience: []
    };
  });

  it('should provide a default state', () => {
    const result = skillReducer(undefined, fakeAction);
    expect(result).toEqual(iniState);
  });

  it('should return the same state for unrecognized actions', () => {
    const result = skillReducer(iniState, fakeAction);
    expect(result).toBe(iniState);
  });

  describe('ADD_SKILL', () => {
    let action;

    beforeEach(() => {
      action = {
        type: 'ADD_SKILL',
        payload: {
          id: 1,
          skill: 'React'
        }
      };
    });

    it('should increment length by one', () => {
      const result = skillReducer(iniState, action);
      expect(result.skills.length).toBe(1);
    });

    it('should return a new state object', () => {
      const result = skillReducer(iniState, action);
      expect(result).not.toBe(iniState);
    });
  });
});
