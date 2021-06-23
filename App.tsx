
import React from 'react'
import TabTwoScreen from './src/components/screens/TabTwoScreen';
import TabOneScreen from './src/components/screens/TabOneScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';


const Stack = createStackNavigator()

const Screen1 = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <TabOneScreen />
      <Button
        title="Go to tab 2"
        onPress={() => navigation.navigate("Tab2")}
      >

      </Button>
    </View>
  )
}

const Screen2 = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <TabTwoScreen />
      <Button title="Go back"
        onPress={() => navigation.goBack("Tab1")}
        color="#841584"
      />
    </View>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab1" headerMode="none">
        <Stack.Screen name="Tab1" component={Screen1} />
        <Stack.Screen name="Tab2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

