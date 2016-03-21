import Constants from '../Constants';
import { cloneDeep } from 'lodash';

const setInitialState = () => cloneDeep({
    credentials: {
        username: '',
        password: '',
    },
    errors: {},
});

const initialState = setInitialState();

export function authForm(state = initialState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
    case Constants.CHANGE_LOGIN_FORM_MODEL:
        newState.credentials[action.field] = action.value;
        return newState;


    case Constants.SET_LOGIN_FORM_ERRORS:
        newState.errors = action.errors;
        return newState;

    case Constants.RESET_LOGIN_FORM:
        return setInitialState();

    default:
        return state;
    }
}
