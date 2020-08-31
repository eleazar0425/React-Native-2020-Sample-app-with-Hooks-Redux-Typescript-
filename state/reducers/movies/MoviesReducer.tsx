import {MoviesActionTypes, MOVIES_FAILED, MOVIES_SUCESS, MOVIES_REQUEST, ADD_TO_FAVORITES, DELETE_FROM_FAVORITES} from '../../actions/movies/types'

import { MovieState } from '../../types'

const initialState: MovieState = {
    page: 1,
    list: [],
    favoriteList: [],
    loading: false
}

export default function moviesReducer(state: MovieState = initialState, action: MoviesActionTypes): MovieState {
    switch(action.type){
        case MOVIES_SUCESS: 
            return {
                ...state,
                list: state.list.concat(action.payload),
                page: state.page + 1,
                loading: false
            }
        case MOVIES_FAILED: 
            return {
                ...state, 
                loading: false
            }
        case MOVIES_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case ADD_TO_FAVORITES:
            action.payload.isFavorite = true
            return {
                ...state,
                favoriteList: state.favoriteList.concat(action.payload),
                list: state.list.map(e => {
                    if(e.id === action.payload.id){
                        e.isFavorite = true
                    }
                    return e
                })
            }
        case DELETE_FROM_FAVORITES:
            action.payload.isFavorite = false
            return {
                ...state, 
                favoriteList: state.favoriteList.filter(e => e.id !== action.payload.id),
                list: state.list.map(e => {
                    if(e.id === action.payload.id){
                        e.isFavorite = false
                    }
                    return e
                })
            }
        default: 
            return state
    }
}