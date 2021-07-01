import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { View, Text, TextInput, Pressable } from 'react-native';

const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(input: { email: $email, password: $password, name: $name }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  // mutation[0]: A function to trigger the mutation
  // mutation[1]: Result object
  // {data, error, loading}
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);

  if (error) {
    Alert.alert('Error signing up. Try again ');
  }
  if (data) {
    //save Token
    AsyncStorage.setItem('token', data.signUp.token).then(() => {
      // redirect home
      navigation.navigate('Home');
    });
  }

  const onSubmit = () => {
    signUp({ variables: { name, email, password } });
  };

  return (
    <View style={{ padding: 20, backgroundColor: '#c1c1c1', flex: 1 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <TextInput
        placeholder="Leonardo.jaques@outlook.com"
        value={email}
        onChangeText={setEmail}
        style={{
          color: 'white',
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
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: '#e33062',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        {loading && <ActivityIndicator />}
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Sign Up
        </Text>
      </Pressable>
      <Pressable
        disabled={loading}
        onPress={() => navigation.navigate('SignIn')}
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
          Already Have an account? Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
