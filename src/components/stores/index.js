import { createStore } from 'redux'
import {moviesReducer} from "./movies/reducer";

export const stores = {
    movies: createStore(moviesReducer),

};