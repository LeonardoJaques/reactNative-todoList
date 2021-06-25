import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'


const SignInScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    // Submit
    console.warn("Sign In");

  }

  const navigation = useNavigation()

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="leonardo.jaques@outlook.com"
        value={email}
        onChangeText={setEmail}
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25
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
          marginVertical: 25
        }}
      />
      <Pressable
        onPress={onSubmit}
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
            fontWeight: 'bold'
          }}
        >Sign In</Text>
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
            fontWeight: 'bold'
          }}
        >New here? Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default SignInScreen
