import React, { Component } from 'react';
import BankStore from '../stores/BankStore';
import BankService from '../services/BankService';

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.state = BankStore.getState();

        BankStore.subscribe(() => this.setState(BankStore.getState()));
    }

    componentWillMount() {
        BankService.getAllBanks().then((banks) => {
            BankStore.dispatch({
                type: 'ADD_BANKS',
                banks,
            });
        });
    }

    render () {
        return (
            <div>
                <h4>Список банков:</h4>
                <ul className="list-group">
                    {this.state.banks.map(({ bankId, name }) => <li key={bankId} className="list-group-item">{name}</li> )}
                </ul>
            </div>
        );
    }
}

export default AddTransaction;
