import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import './styles/App.css'
import configureStore, { history } from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomeComponent from './components/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
      <>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
