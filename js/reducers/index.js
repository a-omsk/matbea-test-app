import { combineReducers } from 'redux';
import { banks } from './banks';
import { transactions } from './transactions';
import { user } from './user';
import { authForm } from './authForm';
import { transactionForm } from './transactionForm';

const rootReducer = combineReducers({
    user,
    banks,
    transactions,
    authForm,
    transactionForm,
});

export default rootReducer;
