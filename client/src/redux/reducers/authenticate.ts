const authenticateReducer = (state = {}, action:any) => {
    switch (action.type) {
        case 'GET_LOGIN':
            return { ...state, loading: true };
        case 'LOGIN_RECEIVED':
            return { ...state, isAuth:action.payload, loading: false }
       case 'AUTHENTICATE':
            return { ...state, user: action.payload}
        default:
            return state;
    }
};
export default authenticateReducer;
