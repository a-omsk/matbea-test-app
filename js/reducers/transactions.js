import { reject } from 'lodash';
import Constants from '../Constants';

const initialState = {
    items: [],
    loaded: false,
};

export function transactions(state = initialState, action) {
    switch (action.type) {
    case Constants.LOAD_TRANSACTIONS_SUCCESS:
        return Object.assign({}, state, {
            items: state.items.concat(action.transactions),
            loaded: true,
        });

    case Constants.ADD_TRANSACTIONS:
        return Object.assign({}, state, {
            items: state.items.concat(action.transactions),
        });

    case Constants.REMOVE_TRANSACTIONS:
        return Object.assign({}, state, {
            items: reject(state.items, ({ id }) => id === action.id),
        });

    default:
        return state;
    }
}
