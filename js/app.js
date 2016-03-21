import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import Auth from './containers/Auth';
import AddTransaction from './containers/AddTransaction';
import Transactions from './containers/Transactions';
import RestrictedAccess from './components/RestrictedAccess';
import Logout from './containers/Logout';
import configureStore from './stores';
import '../styles/bootstrap.min.css';

const store = configureStore();

const requireAuth = (nextState, redirectTo) => {
    const { isAuthorized } = store.getState().user;

    if (!isAuthorized) {
        redirectTo('/auth', null, { nextPathname: nextState.location.pathname });
    }
};

render((
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route component={Main}>
              <Route path="auth" component={Auth} />
              <Route path="user" component={RestrictedAccess} onEnter={requireAuth} >
                  <Route path="add" component={AddTransaction} />
                  <Route path="transactions" component={Transactions} />
                  <Route path="logout" component={Logout} />
              </Route>
              <Redirect from="/" to={'/auth'} />
          </Route>
      </Router>
  </Provider>
), document.querySelector('#react'));
