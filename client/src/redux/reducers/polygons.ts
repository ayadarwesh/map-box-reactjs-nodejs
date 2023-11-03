const polygonsReducer = (state = {}, action:any) => {
    switch (action.type) {
        case 'GET_POLYGONS':
            return { ...state, loading: true };
        case 'POLYGONS_RECEIVED':
            return { ...state, polygons: action.payload, loading: false }
        default:
            return state;
    }
};
export default polygonsReducer;
