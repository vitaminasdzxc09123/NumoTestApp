import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list             : [],
    update           : {},
    isLoadingCompany : false
};

export default (state = initialState, action = {}) => {
    const { type, data } = action;

    switch (type) {
        case ACTIONS.GET_COMPANY_LIST:
            return { ...state, list : data };
        case ACTIONS.START_LOAD_COMPANY_LIST:
            return { ...state, isLoadingCompany : true };
        case ACTIONS.END_LOAD_COMPANY_LIST:
            return { ...state, isLoadingCompany : false };
        case ACTIONS.GET_COMPANY_UPDATE:
            return { ...state, update : data };
        default:
            return state;
    }
};
