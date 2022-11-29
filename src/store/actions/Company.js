import api from '../../apiSingleton';
import ACTIONS from '../constants/actionsTypes';

export function getCompanyList() {
    return async (dispatch) => {
        try {
            dispatch({
                type : ACTIONS.START_LOAD_COMPANY_LIST
            });

            const company = await api.company.list();

            dispatch({
                type : ACTIONS.GET_COMPANY_LIST,
                data : company
            });

            dispatch({
                type : ACTIONS.END_LOAD_COMPANY_LIST
            });
        } catch (err) {
            console.error('[ERROR] getCompanyList', err);

            return (err);
        }
    };
}

export function getCompanyUpdate(payload) {
    return async (dispatch) => {
        try {
            const update = await api.company.update(payload);

            dispatch({
                type : ACTIONS.GET_COMPANY_UPDATE,
                data : update
            });
        } catch (err) {
            console.error('[ERROR] getCompanyUpdate', err);

            return (err);
        }
    };
}
