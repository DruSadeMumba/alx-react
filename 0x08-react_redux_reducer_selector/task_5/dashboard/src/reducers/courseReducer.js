import { FETCH_COURSE, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

export const initialState = [
  { id: 1, name: 'Course 1', isSelected: false },
  { id: 2, name: 'Course 2', isSelected: false }
];

export const courseReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return action.data.map(course => ({ ...course, isSelected: false }));

    case SELECT_COURSE:
      return state.map(course =>  course.id === action.index ? { ...course, isSelected: true } : course);

    case UNSELECT_COURSE:
      return state.map(course =>  course.id === action.index ? { ...course, isSelected: false } : course);

    default:
      return state;
  }
};
