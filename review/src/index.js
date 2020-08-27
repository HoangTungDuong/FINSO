import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import HomeComponent from './components/HomeComponent';
import NewsDetail from './components/NewsDetail';
import configureStore, { hashHistory } from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles/App.css';
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={hashHistory}> { /* place ConnectedRouter under Provider */}
      <>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/read-news" component={NewsDetail} />
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
