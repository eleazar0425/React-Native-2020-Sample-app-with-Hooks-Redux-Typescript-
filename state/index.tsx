import MoviesReducer from './reducers/movies/MoviesReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    movies: MoviesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer