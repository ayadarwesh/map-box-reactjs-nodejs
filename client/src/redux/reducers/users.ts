const usersReducer = (state = {}, action:any) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        case 'USERS_RECEIVED':
            return { ...state, users: action.payload, loading: false }
        default:
            return state;
    }
};
export default usersReducer;
