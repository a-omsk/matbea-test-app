import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/user';

class Logout extends Component {

    componentWillMount() {
        const { logout } = this.props.userActions;

        logout();
        hashHistory.push('/auth');
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
