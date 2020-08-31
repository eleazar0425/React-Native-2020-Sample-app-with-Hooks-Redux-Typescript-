import Movie from '../../../model/Movie'

export const MOVIES_REQUEST = 'MOVIES_REQUEST'
export const MOVIES_SUCESS  = 'MOVIES_SUCESS'
export const MOVIES_FAILED  = 'MOVIES_FAILED'

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITE'
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITE'

interface RequestMoviesAction {
    type: typeof MOVIES_REQUEST,
    payload: {
        page: Number
    }
}

interface MoviesSucessAction {
    type: typeof MOVIES_SUCESS
    payload: Array<Movie>
}

interface MoviesFailedAction {
    type: typeof MOVIES_FAILED
}

interface AddFavoritesAction {
    type: typeof ADD_TO_FAVORITES,
    payload: Movie
}

interface DeleteFromFavoritesAction  {
    type: typeof DELETE_FROM_FAVORITES,
    payload: Movie
}

export type MoviesActionTypes 
= RequestMoviesAction | MoviesSucessAction | MoviesFailedAction | AddFavoritesAction | DeleteFromFavoritesAction