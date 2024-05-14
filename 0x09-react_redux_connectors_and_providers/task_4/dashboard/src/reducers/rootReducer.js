import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { initialNotiState, notificationReducer } from './notificationReducer';
import { initialUiState, uiReducer } from './uiReducer';
import { Map } from 'immutable';

export const initialState = {
  initialCourseState: Map([]),
  initialNotificationState: Map(initialNotiState),
  initialUiState: Map(initialUiState),
};

export const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});
