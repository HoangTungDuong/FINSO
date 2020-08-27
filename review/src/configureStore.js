import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/reducers'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )
 
  return store
}

export const store = configureStore();

export const hashHistory = qhistory(
  createBrowserHistory({ /* history configuration options */ }),
  stringify,
  parse
)