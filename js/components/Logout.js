import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import UserStore from '../stores/UserStore';

class Logout extends Component {

    componentWillMount() {
        UserStore.dispatch({
            type: 'LOGOUT'
        });

        browserHistory.push('auth');
    }

    render () {
        return <div />;
    }
}

export default Logout;
