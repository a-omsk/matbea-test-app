import React from  'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import Auth from './components/Auth';
import AddTransaction from './components/AddTransaction';
import Transactions from './components/Transactions';
import BanksList from './components/BanksList';
import Logout from './components/Logout';
import UserStore from './stores/UserStore';
import '../styles/bootstrap.min.css';

const requireAuth = (nextState, redirectTo) => {
    const { isAuthorized } = UserStore.getState();

    if(!isAuthorized) {
        redirectTo('/auth', null, { nextPathname: nextState.location.pathname });
    }
}

render((
  <Router history={browserHistory}>
    <Route component={Main}>
        <Route path="auth" component={Auth} />
        <Route path="add" component={AddTransaction} onEnter={requireAuth} />
        <Route path="list" component={BanksList} onEnter={requireAuth} />
        <Route path="transactions" component={Transactions} onEnter={requireAuth} />
        <Route path="logout" component={Logout} onEnter={requireAuth} />
        <Redirect from="/" to={'/auth'} />
    </Route>

  </Router>
), document.querySelector('#react'));
