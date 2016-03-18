import { createStore } from 'redux';

const defaultState = {
    isAuthorized: false,
}

function UserStore(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isAuthorized: true,
            });
            break;
        case 'LOGOUT':
            return Object.assign({}, state, {
                isAuthorized: false,
            });
        default:
            return state;
    }
}

export default createStore(UserStore);
