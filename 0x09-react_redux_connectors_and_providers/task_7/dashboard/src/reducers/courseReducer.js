import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';


export const courseReducer = (state = Map([]), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data));

    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};
