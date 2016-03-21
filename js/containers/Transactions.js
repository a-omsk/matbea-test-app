import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionsList from '../components/TransactionsList';
import * as transactionActions from '../actions/transactions';

class Transactions extends Component {
    componentWillMount() {
        if (this.props.transactions.loaded) {
            // Do nothing
        } else {
            const { loadTransactions } = this.props.transactionActions;
            loadTransactions();
        }
    }

    render () {
        const { transactions, banks: { items } } = this.props;
        const { removeTransaction } = this.props.transactionActions;

        return (
            <TransactionsList
              banks={items}
              transactions={transactions}
              removeTransaction={removeTransaction}
            />
        );
    }
}

function mapStateToProps({ transactions, banks }, ownProps) {
    return {
        transactions,
        banks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionActions: bindActionCreators(transactionActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
