import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Main extends Component {
    render() {
        const { isAuthorized } = this.props.user;

        return (
            <div>
                <Header isAuthorized={isAuthorized} />
                <div>{this.props.children}</div>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(Main);
