import Constants from '../Constants';
import BankService from '../services/BankService';

export function addBanks(banks) {
    return {
        type: Constants.ADD_BANKS,
        banks,
    };
}

export function loadBanks() {
    return (dispatch) => {
        dispatch({
            type: Constants.LOAD_BANKS_REQUEST,
        });

    BankService.getAllBanks()
        .then(banks => {
            dispatch({
                type: Constants.LOAD_BANKS_SUCCESS,
                banks,
            });
        });
    }
}
