import React, { Component } from  'react';
import { browserHistory } from 'react-router';
import Auth from './Auth';
import BanksList from './BanksList';
import Header from './Header';
import BankService from '../services/BankService';
import UserStore from '../stores/UserStore';
import BankStore from '../stores/BankStore';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.subscription = UserStore.subscribe(() => {
            this.setState(UserStore.getState());
        });

        this.state = UserStore.getState();

        this.submit = (data) => {
            UserStore.dispatch({
                type: 'LOGIN',
            });

            browserHistory.push('transactions');
        }
    }

    componentWillMount() {
        const { banks } = BankStore.getState();

        if (banks.length) {
            // Do nothing
        } else {
            BankService.getAllBanks().then((banks) => {
                BankStore.dispatch({
                    type: 'ADD_BANKS',
                    banks,
                });
            });
        }
    }

    componentWillUnmount() {
        this.subscription();
    }

    render () {
        return (
            <div>
                <Header isAuthorized={this.state.isAuthorized} />
                <div>{ React.cloneElement(this.props.children, {submit: this.submit}) }</div>
            </div>
        );
    }
};
