import Constants from '../Constants';

export function changeModel(field, value) {
    return {
        type: Constants.CHANGE_TRANSACTION_FORM_MODEL,
        field,
        value,
    };
}

export function setErrors(errors) {
    return {
        type: Constants.SET_TRANSACTION_FORM_ERRORS,
        errors,
    };
}

export function resetModel() {
    return { type: Constants.RESET_TRANSACTION_FORM };
}
