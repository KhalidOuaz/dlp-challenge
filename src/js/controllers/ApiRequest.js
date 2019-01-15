import {Request} from "./Request";
import {env} from "./../../env";

export const API_URL = env.apiUrl;

export const ApiRequest = class ApiRequest {

    static async search(query) {
        //console.log(API_URL + '/search/movie'+ '?api_key=' + env.apiKeys + '&query=' + query);
        return await Request.fetch(
            API_URL + '/search/movie' + '?api_key=' + env.apiKeys + '&query='+ query, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
    }
};