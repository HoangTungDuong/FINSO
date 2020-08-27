import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerUserProfile from './reducerUserProfile';
import reducerNews from './reducerNews';
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  reducerUserProfile,
  reducerNews
});
export default createRootReducer