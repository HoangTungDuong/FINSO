import { initialState } from './initialState/initialStateUserProfile';
import { SAVE_USER_PROFILE } from '../actions/actionUserProfile';

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_PROFILE:
      const { userName, userPreference } = action.payload;
      return {
        ...state,
        userName,
        userPreference
      }
    default:
      return state;
  }
}