import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      if (await isAuthenticated()) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkUser();
  }, [navigation]);

  const isAuthenticated = async () => {
    // await AsyncStorage.removeItem('token');
    const token = await AsyncStorage.getItem('token');

    return !!token;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
