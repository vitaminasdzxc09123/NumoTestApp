import api from '../../apiSingleton';
import ACTIONS from '../constants/actionsTypes';

export function getEventList() {
    return async (dispatch) => {
        try {
            // dispatch({
            //     type : ACTIONS.START_LOAD_ACTIONS_LOG_LIST
            // });
            const eventList = await api.event.list();

            dispatch({
                type : ACTIONS.GET_EVENTS_LIST,
                data : eventList
            });
            // dispatch({
            //     type : ACTIONS.END_LOAD_ACTIONS_LOG_LIST
            // });
        } catch (err) {
            console.error('[ERROR] getEventList', err);
        }
    };
}
