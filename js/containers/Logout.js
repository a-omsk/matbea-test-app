import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/user';

class Logout extends Component {

    componentWillMount() {
        const { logout } = this.props.userActions;

        logout();
        browserHistory.push('auth');
    }

    render () {
        return <div />;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators({ logout }, dispatch),
    };
}

export default connect(() => ({}), mapDispatchToProps)(Logout);
