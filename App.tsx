import React from 'react'
import 'react-native-gesture-handler';
import TabOneScreen from './src/components/screens/TabOneScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TabTwoScreen from './src/components/screens/TabTwoScreen';

const { Screen, Navigator } = createStackNavigator();

const Screens = () => {
  return (
    <Navigator headerMode="none">
      {/* <Screen name="TabOne" component={TabOneScreen} /> */}
      <Screen name="TabTwo " component={TabTwoScreen} />
    </Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  )
}

export default App

