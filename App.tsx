import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true, 
            headerStyle: {
              backgroundColor: 'transparent', 
            },
            headerTintColor: 'white', 
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true, 
            headerStyle: {
              backgroundColor: 'transparent', 
            },
            headerTintColor: 'white', 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
