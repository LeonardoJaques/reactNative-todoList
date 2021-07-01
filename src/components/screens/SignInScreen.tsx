import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SIGN_IN_MUTATION = gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(input: { email: $email, password: $password }) {
        token
        user {
          id
          name
          email
        }
      }
    }
  `;

  const [signIn, { data, error, loading }] = useMutation(SIGN_IN_MUTATION);

  useEffect(() => {
    if (error) {
      Alert.alert('Invalid credentials, try again');
    }
  }, [error]);
  if (data) {
    //save Token
    AsyncStorage.setItem('token', data.signIn.token).then(() => {
      console.log(data.signIn.token);

      // redirect home
      navigation.navigate('Home');
    });
  }

  const onSubmit = () => {
    signIn({ variables: { email, password } });
  };

  const navigation = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="leonardo.jaques@outlook.com"
        value={email}
        onChangeText={setEmail}
        style={{
          color: 'gray',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{
          color: 'gray',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <Pressable
        onPress={onSubmit}
        disabled={loading}
        style={{
          backgroundColor: '#e33062',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Sign In
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={{
          borderWidth: 2,
          borderColor: '#e33062',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            color: '#e33062',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          New here? Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
