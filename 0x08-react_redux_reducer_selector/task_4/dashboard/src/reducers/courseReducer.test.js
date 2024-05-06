import { FETCH_COURSE, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseReducer, initialState } from './courseReducer';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE', () => {
    const action = { type: FETCH_COURSE, data: initialState };
    expect(courseReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialState.map(course => course.id === action.index ? { ...course, isSelected: true } : course);
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialState.map(course => course.id === action.index ? { ...course, isSelected: false } : course);
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
