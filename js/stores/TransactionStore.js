import { createStore } from 'redux';
import { reject } from 'lodash';

const defaultState = {
    transactions: []
}

function TransactionStore(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TRANSACTIONS':
            return Object.assign({}, state, {
                transactions: state.transactions.concat(action.transactions)
            });

            break;
        case 'REMOVE_TRANSACTIONS':
            return Object.assign({}, state, {
                transactions: reject(state.transactions, transaction => transaction.id === action.id)
            });

            break;
        default:
            return state;
    }
}

export default createStore(TransactionStore);
