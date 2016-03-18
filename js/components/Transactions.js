import React, { Component } from 'react';
import BankService from '../services/BankService';
import TransactionStore from '../stores/TransactionStore';
import TransactionsService from '../services/TransactionsService';

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = TransactionStore.getState();

        this.subscription = TransactionStore.subscribe(() => {
            this.setState(TransactionStore.getState())
        });

        this.deleteTransaction = (id) => () => {
            TransactionStore.dispatch({
                type: "REMOVE_TRANSACTIONS",
                id,
            });
        }
    }

    componentWillMount() {
        if (this.state.transactions.length) {
            // Do nothing
        } else {
            TransactionsService.getTransactions().then(transactions => {
                TransactionStore.dispatch({
                    type: "ADD_TRANSACTIONS",
                    transactions,
                });
            });
        }
    }

    componentWillUnmount() {
        this.subscription();
    }

    render () {
        return (
            <div className="container">
                <h2>Список транзакций</h2>
                <table className="table">

                    <thead>
                        <tr>
                            <th>Сумма</th>
                            <th>Название банка</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.transactions.map(({id, bankId, amount}) => (
                            <tr key={id}>
                                <td>{amount}</td>
                                <td>{BankService.getName(bankId)}</td>
                                <td style={{ cursor: 'pointer' }} onClick={this.deleteTransaction(id)}>x</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Transactions;
