import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list             : {},
    isLoadingCompany : false
};

export default (state = initialState, action = {}) => {
    const { type, data } = action;

    switch (type) {
        case ACTIONS.GET_EVENTS_LIST:
            return { ...state, list : data };
        // case ACTIONS.START_LOAD_ACTIONS_LOG_LIST:
        //     return { ...state, isLoadingCompany : true };
        // case ACTIONS.END_LOAD_ACTIONS_LOG_LIST:
        //     return { ...state, isLoadingCompany : false };
        default:
            return state;
    }
};
