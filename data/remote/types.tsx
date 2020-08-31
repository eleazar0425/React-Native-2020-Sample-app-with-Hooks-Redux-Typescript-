import Movie from "../../types/Movie";

type MoviesResponse = {
    page: number,
    total_results: number,
    total_pages: number,
    results: Array<Movie>
}

type ServerResponse = {
    data: MoviesResponse
}

export { MoviesResponse, ServerResponse }