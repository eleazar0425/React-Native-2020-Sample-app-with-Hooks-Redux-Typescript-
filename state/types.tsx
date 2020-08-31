import Movie from "../types/Movie";

type MovieState = {
    list: Array<Movie>,
    favoriteList: Array<Movie>
    page: number,
    loading: boolean
}

export {MovieState}