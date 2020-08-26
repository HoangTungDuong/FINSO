import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerUserProfile from './reducerUserProfile';
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  reducerUserProfile
});
export default createRootReducer