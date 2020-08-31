import Movie from "../../model/Movie";
import client from './AxiosClient'
import { ServerResponse } from './types'

function fetchMovies(page: Number) {
    const promise = new Promise<Array<Movie>>((resolve, reject) => {
        
        client.request<ServerResponse>({
            url: 'discover/movie',
            params: {
                page: page
            }
        }).then(async res => {
            console.log('RESPONSE:' + JSON.stringify(res.data.results.length))
            resolve(res.data.results)
        }).catch( error => {
            console.log('ERROR:' + error)
            reject(error)
        })
    })
    return promise
}

export default {
    fetchMovies
}