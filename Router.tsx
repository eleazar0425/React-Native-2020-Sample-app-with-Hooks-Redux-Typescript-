import React from 'react';
import HomeScreen from './containers/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StackParamList from './types/StackParamList'
import Detail from './components/detail/Detail';

const Stack = createStackNavigator<StackParamList>()

export default function() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>)
}