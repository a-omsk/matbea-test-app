import Constants from '../Constants';
import { cloneDeep } from 'lodash';

const setInitialState = () => cloneDeep({
    transactionModel: {
        amount: 0,
        bankId: 1,
    },
    errors: {},
});

const initialState = setInitialState();

export function transactionForm(state = initialState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
    case Constants.CHANGE_TRANSACTION_FORM_MODEL:
        newState.transactionModel[action.field] = action.value;
        return newState;


    case Constants.SET_TRANSACTION_FORM_ERRORS:
        newState.errors = action.errors;
        return newState;

    case Constants.RESET_TRANSACTION_FORM:
        return setInitialState();

    default:
        return state;
    }
}
