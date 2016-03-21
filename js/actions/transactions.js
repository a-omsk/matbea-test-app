import uuid from 'uuid';
import Constants from '../Constants';
import TransactionsService from '../services/TransactionsService';

export function addTransactions(transactions) {
    return {
        type: Constants.ADD_TRANSACTIONS,
        transactions,
    };
}

export function removeTransaction(id) {
    return {
        type: Constants.REMOVE_TRANSACTIONS,
        id,
    };
}

export function loadTransactions() {
    return (dispatch) => {
        dispatch({
            type: Constants.LOAD_TRANSACTIONS_REQUEST,
        });

        TransactionsService.getTransactions()
            .then(transactions => {
                dispatch({
                    type: Constants.LOAD_TRANSACTIONS_SUCCESS,
                    transactions,
                });
            });
    };
}

export function postTransaction(bankId, amount) {
    return (dispatch) => {
        dispatch({
            type: Constants.POST_TRANSACTION_REQUEST,
        });

        const newTransaction = {
            id: uuid.v1(),
            bankId: parseInt(bankId, 10),
            amount: parseInt(amount, 10),
        };

        TransactionsService.addTransaction(newTransaction).then(() => {
            dispatch({
                type: Constants.ADD_TRANSACTIONS,
                transactions: [newTransaction],
            });
        });
    };
}
