
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectsScreen from '../components/screens/ProjectsScreen';
import ToDoScreen from '../components/screens/ToDoScreen';



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ProjectsScreen}
          options={{
            title: 'My home ', headerStyle: {
              backgroundColor: '#463b38',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }} />
        <Stack.Screen
          name="ToDoScreen"
          component={ToDoScreen}
          options={{
            headerStyle: {
              backgroundColor: '#463b38',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;


