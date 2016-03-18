import { createStore } from 'redux';

const defaultState = {
    banks: []
}

function BankStore(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_BANKS':
            return Object.assign({}, state, {
                banks: state.banks.concat(action.banks)
            });
            break;
        default:
            return state;
    }
}

export default createStore(BankStore);
