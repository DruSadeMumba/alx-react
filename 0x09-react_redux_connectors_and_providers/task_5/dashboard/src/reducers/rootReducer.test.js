import { rootReducer } from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
  const action = rootReducer(undefined, {type: "RANDOM"});
  const initialState = {
    courses: Map({}),
    notifications: Map({}),
    ui: Map({}),
  };

  it('should return the initial state', () => {
    for (const state in initialState) {
      expect(action[state]).toBeTruthy();
      expect(typeof initialState[state]).toEqual(typeof action[state]);
    }
  });
});
