const initialState = {
    isAuthorized: false,
};

export function user(state = initialState, action) {
    switch (action.type) {
    case 'LOGIN':
        return Object.assign({}, state, {
            isAuthorized: true,
        });

    case 'LOGOUT':
        return Object.assign({}, state, {
            isAuthorized: false,
        });

    default:
        return state;
    }
}
