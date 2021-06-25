import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

const SplashScreen = () => {


  const navigation = useNavigation()

  useEffect(() => {
    if (isAuthenticated()) {
      navigation.navigate('Home')
    } else navigation.navigate('SignIn')

  }, [])

  const isAuthenticated = () => {
    return true
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  )
}

export default SplashScreen
