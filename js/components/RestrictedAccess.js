import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBanks } from '../actions/banks';

class RestrictedAccess extends Component {
    componentWillMount() {
        const { loadBanks } = this.props.bankActions;
        const { loaded } = this.props.banks;

        if (loaded) {
            // Do nothing
        } else {
            loadBanks();
        }
    }

    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps({ banks }, ownProps) {
    return { banks };
}

function mapDispatchToProps(dispatch) {
    return {
        bankActions: bindActionCreators({ loadBanks }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestrictedAccess);
