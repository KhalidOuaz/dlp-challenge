import {GET_SEARCH_TEXT, SET_SEARCH_MOVIES,RESET} from "./action";
import objectDeepAssign from 'object-assign-deep';
import {copy} from "../../../js/controllers/util";
import {MoviesInterface} from "../../store/interface";

let stateMovies : MoviesInterface = {
    searchText:{
        "page": 1,
        "total_results": 39,
        "total_pages": 1,
        "results": []
    },
    results: {}
};

export const moviesReducer = function (state = stateMovies, action) {
    switch (action.type) {
        case SET_SEARCH_MOVIES:
            state.searchText = copy(objectDeepAssign(state.searchText, action.payload));
            return state;
        case GET_SEARCH_TEXT:
            state.results = action.payload;
            return state;
        case RESET:
            state.searchText = copy(objectDeepAssign(state.searchText, action.payload));
            return state;
        default:
            return state
    }
};
