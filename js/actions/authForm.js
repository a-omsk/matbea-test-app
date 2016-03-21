import Constants from '../Constants';

export function changeModel(field, value) {
    return {
        type: Constants.CHANGE_LOGIN_FORM_MODEL,
        field,
        value,
    };
}

export function setErrors(errors) {
    return {
        type: Constants.SET_LOGIN_FORM_ERRORS,
        errors,
    };
}

export function resetModel() {
    return { type: Constants.RESET_LOGIN_FORM };
}
