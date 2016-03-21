import Constants from '../Constants';

export function login() {
    return { type: Constants.LOGIN };
}

export function logout() {
    return { type: Constants.LOGOUT };
}
