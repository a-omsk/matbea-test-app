import Constants from '../Constants';

const initialState = {
    items: [],
    loaded: false,
};

export function banks(state = initialState, action) {
    switch (action.type) {
        case Constants.LOAD_BANKS_SUCCESS:
            return Object.assign({}, state, {
                items: state.items.concat(action.banks),
                loaded: true,
            });
            break;

        case Constants.ADD_BANKS:
            return Object.assign({}, state, {
                items: state.items.concat(action.banks),
            });
            break;

        default:
            return state;
    }
}
