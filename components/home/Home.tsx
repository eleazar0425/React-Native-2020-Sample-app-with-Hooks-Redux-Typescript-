import React from "react";
import {FlatList, ListRenderItem, View, Text} from "react-native";
import Movie from "../../types/Movie";
import styles from "../../styles/Styles"
import HomeCell from "./HomeCell";
import { StackNavigationProp } from '@react-navigation/stack'
import StackParamList from "../../types/StackParamList";

export interface Props {
    movies: Array<Movie>
    setFavorite: ( (movie: Movie, isFavorite: boolean) => void )
    loadMoreItems: () => void
    navigation: StackNavigationProp<StackParamList, 'Home'>
}

export default function HomeList(props: Props) {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={3}
                keyExtractor= { (_, index) => {return String(index)} }
                data={props.movies}
                renderItem= {
                    ({item}: {item: Movie}) => (
                        <HomeCell movie={item} setFavorite={props.setFavorite} 
                        showMovieDetail={(movie: Movie) => {
                            props.navigation.navigate('Detail', {
                                movie: movie
                            })
                        }}></HomeCell>
                    )
                }
                onEndReached={props.loadMoreItems}
            >
            </FlatList>
        </View>
    )
}