import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TodoItem from '../TodoItem';

export default function TabOneScreen({ navigation }: any) {


  const [title, setTitle] = useState("")


  const [todos, setTodos] = useState([
    { id: 1, content: "Buy milk", isCompleted: false },
    { id: 2, content: "Buy bear", isCompleted: false },
    { id: 3, content: "Buy meat", isCompleted: false },
    { id: 4, content: "Buy water", isCompleted: false },
  ])


  const creatNewItem = (atIndex: number) => {
    const newTodos = [...todos]
    newTodos.splice(atIndex, 0, {
      id: todos.length + 1,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos)
  }


  return (


    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 200 : 0}
    >
      <TextInput style={styles.title}
        value={title}
        onChangeText={setTitle}
        placeholder={'Title'}
      />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (<TodoItem todo={item} onSubmit={() => creatNewItem(index + 1)} />)}
        style={{ width: "100%" }}
      />
    </KeyboardAvoidingView>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: "red",
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 12
  },

})
