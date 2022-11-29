import Base from './Base.js';

export default class EventAPI extends Base {
    async list() {
        return this.apiClient.get({
            requestURL : 'joke/Any?amount=1',
        });
    }
}
