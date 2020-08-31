import React, { useEffect } from 'react'
import HomeList from '../components/home/Home';
import Movie from '../types/Movie'
import { StackNavigationProp } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import StackParamList from "../types/StackParamList";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../state/index'
import { State } from 'react-native-gesture-handler';
import movieActions from '../state/actions/movies/MoviesActions'
import Spinner from 'react-native-loading-spinner-overlay'
import { View } from 'react-native';
import styles from '../styles/Styles';

export interface Props {
    navigation?: StackNavigationProp<StackParamList, 'Home'> | undefined
}

export interface State {
    movies: Array<Movie>
    favoriteMovies: Array<Movie>
}

export default function HomeScreen(props: Props) {
    
    const Tabs = createBottomTabNavigator()

    const movies = useSelector((state: RootState) => state.movies.list)
    const page = useSelector((state: RootState) => state.movies.page)
    const isLoading = useSelector((state: RootState) => state.movies.loading)

    const favorites = useSelector((state: RootState) => state.movies.favoriteList)
    
    const dispatch = useDispatch()

    const setFavorite = (movie: Movie, isFavorite: boolean)=>{
        if(isFavorite){
            dispatch(movieActions.addToFavorites(movie))
        }else{
            dispatch(movieActions.deleteFromFavorites(movie))
        }
    }

    useEffect(() => {
        movieActions
        dispatch(movieActions.getMovies(page))
    }, [])

    return(
    <View style={styles.container}>
        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
        />
        <Tabs.Navigator>
            <Tabs.Screen
                name="Movies" 
                children={()=> <HomeList 
                movies= {movies}
                setFavorite = {setFavorite}
                loadMoreItems = {()=> dispatch(movieActions.getMovies(page + 1))}
                navigation = { props.navigation }></HomeList>} options={{
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}></Tabs.Screen>
            <Tabs.Screen name="Favorites"
                children={()=> <HomeList 
                movies= {favorites}
                setFavorite = {setFavorite}
                loadMoreItems = {()=> {} }
                navigation = {props.navigation }></HomeList>}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="star" color={color} size={size} />
                    ),
                }}></Tabs.Screen>
        </Tabs.Navigator>
    </View>);
}

