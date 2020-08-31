import * as React from "react"
import {View, Image, Text, TouchableOpacity} from "react-native"
import Movie from "../../model/Movie";
import styles from "../../styles/Styles";

export interface Props {
    movie: Movie
    setFavorite: ( (movie: Movie, isFavorite: boolean) => void )
    showMovieDetail: ( (movie:Movie) => void)
} 

export default function HomeCell(props: Props) {
    const movie = props.movie
    const setFavorite = props.setFavorite
    const showMovieDetail = props.showMovieDetail
    return (
        <TouchableOpacity onPress={()=>showMovieDetail(props.movie)} style={styles.item}>
        <View>
            <Image style={styles.cellImage} source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}></Image>
            <View style={{flexDirection: 'row'}}>
            <Text numberOfLines={1} style={styles.textStyle}>{movie.title}</Text>
            <TouchableOpacity onPress={() => {
                setFavorite(movie, !movie.isFavorite)
            }}>
                <Image source={movie.isFavorite ? 
                    require('../../assets/images/favorite.png') :
                    require('../../assets/images/notfavorite.png')}
                    style={styles.favoriteImage}>

                </Image>
            </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
    )
}