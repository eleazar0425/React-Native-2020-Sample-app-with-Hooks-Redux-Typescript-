import React from "react";
import { View, Text, Image } from 'react-native'
import StackParamList from "../../types/StackParamList";
import styles from '../../styles/Styles'
import { RouteProp } from '@react-navigation/native'
import Movie from "../../model/Movie";

interface Props {
    route: RouteProp<StackParamList, 'Detail'>
}

export default function Detail(props: Props){
    const movie: Movie = props.route.params.movie
    return(<View style={styles.detailContainer}>
        <Text>{movie.title}</Text>
        <Image style={{width: 100, height: 160, justifyContent: 'center'}} source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}></Image>
        <Text>{movie.overview}</Text>
    </View>);
}