import {MOVIES_SUCESS, MOVIES_FAILED, MOVIES_REQUEST, ADD_TO_FAVORITES, DELETE_FROM_FAVORITES, MoviesActionTypes} from './types'
import Movie from '../../../types/Movie';
import MoviesDataSource from '../../../data/remote/MoviesRemoteDataSource'
import {Dispatch} from 'redux'

function requestMovies(page: Number): MoviesActionTypes {
    return {
        type: MOVIES_REQUEST,
        payload: {
            page: page
        }
    }
}

function moviesSucess(movies: Array<Movie>): MoviesActionTypes {
    return {
        type: MOVIES_SUCESS,
        payload: movies
    }
}

function movieFailed(): MoviesActionTypes {
    return {
        type: MOVIES_FAILED
    }
}

function addToFavorites(movie: Movie){
    return {
        type: ADD_TO_FAVORITES,
        payload: movie
    }
}

function deleteFromFavorites(movie: Movie){
    return {
        type: DELETE_FROM_FAVORITES,
        payload: movie
    }
}

function getMovies(page: Number) {
    return (dispatch: Dispatch) => {
        dispatch(requestMovies(page))
        MoviesDataSource.fetchMovies(page)
            .then(results => {
                dispatch(moviesSucess(results))
            }).catch(error => {
                dispatch(movieFailed())
            })
    }
}

export default {
    getMovies, 
    addToFavorites,
    deleteFromFavorites
}