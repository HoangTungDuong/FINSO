import { SELECT_NEWS, SET_CURRENT_TAB } from '../actions/actionNews';
import { initialState } from './initialState/initialStateNews';

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NEWS:
      const { selectedNews } = action.payload;
      return {
        ...state,
        selectedNews,
      }
    case SET_CURRENT_TAB:
      const { currentTab } = action.payload;
      return {
        ...state,
        currentTab,
      }
    default:
      return state;
  }
}