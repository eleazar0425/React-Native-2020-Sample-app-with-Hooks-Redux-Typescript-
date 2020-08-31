export default class Movie {
    title: string;
    id: number;
    overview: string
    poster_path: string
    voteAverage: number
    releaseDate: string
    isFavorite: boolean

    constructor(props: any){
        this.title = props.title
        this.id = props.id
        this.overview = props.overview
        this.poster_path = props.poster_path
        this.voteAverage = props.voteAverage
        this.releaseDate = props.releaseDate
        this.isFavorite = props.isFavorite 
    } 
}