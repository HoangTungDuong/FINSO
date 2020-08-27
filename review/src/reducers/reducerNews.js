import { SELECT_NEWS } from '../actions/actionNews';
import { initialState } from './initialState/initialStateNews';

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NEWS:
      const { selectedNews } = action.payload;
      return {
        ...state,
        selectedNews,
      }
    default:
      return state;
  }
}