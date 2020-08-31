import React from 'react';
import HomeScreen from './containers/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StackParamList from './types/StackParamList'
import Detail from './components/detail/Detail';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './state'

const Stack = createStackNavigator<StackParamList>()

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware)
)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


