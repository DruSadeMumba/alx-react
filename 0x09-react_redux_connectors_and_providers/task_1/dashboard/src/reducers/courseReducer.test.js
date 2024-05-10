import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseReducer } from './courseReducer';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  const initialState = [
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false }
    ];
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(Map([]));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: initialState };
    expect(courseReducer(undefined, action).toJS()).toEqual(coursesNormalizer(initialState));
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialState.map(course => course.id === action.index ? { ...course, isSelected: true } : course);
    expect(courseReducer(fromJS(coursesNormalizer(initialState)), action).toJS()).toEqual(coursesNormalizer(expectedState));
  });

  it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialState.map(course => course.id === action.index ? { ...course, isSelected: false } : course);
    expect(courseReducer(fromJS(coursesNormalizer(initialState)), action).toJS()).toEqual(coursesNormalizer(expectedState));
  });
});
