import axios from 'axios'

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': '0146d5c394525fa433bf563607e092c7'
    }
})

export default client