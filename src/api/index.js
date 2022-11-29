import ApiClient   from './ApiClient';
import EventAPI    from './Event';
import apiConfig  from '../constants/config'

export default function apiConstruct(config) {
    const api = new ApiClient(apiConfig);
    return {
        apiClient  : api,
        event      : new EventAPI({ apiClient : api }),
    };
}
