
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectsScreen from '../components/screens/ProjectsScreen';
import ToDoScreen from '../components/screens/ToDoScreen';
import SignInScreen from '../components/screens/SignInScreen';
import SignUpScreen from '../components/screens/SignUpScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" headerMode='float'>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
            headerStyle: {
              backgroundColor: '#201917',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },

          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#201917',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={ProjectsScreen}
          options={{
            title: 'Home ', headerStyle: {
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


