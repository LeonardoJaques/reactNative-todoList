import { gql, useMutation, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput } from 'react-native';
import TodoItem from '../TodoItem';

const GET_PROJECT = gql`
  query getTaskList($id: ID!) {
    getTaskList(id: $id) {
      id
      title
      createdAt
      todos {
        id
        content
        isCompleted
      }
    }
  }
`;

const CREATE_TODO = gql`
  mutation createToDo($content: String!, $taskListId: ID!) {
    createToDo(content: $content, taskListId: $taskListId) {
      id
      content
      isCompleted

      taskList {
        id
        progress
        todos {
          content
          isCompleted
        }
      }
    }
  }
`;
const ToDoScreen = () => {
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');

  const route = useRoute();

  const id = route.params?.id;
  const { data, error } = useQuery(GET_PROJECT, { variables: { id } });
  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: GET_PROJECT,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('Error fetching projects', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setProject(data.getTaskList);
      setTitle(data.getTaskList.title);
    }
  }, [data]);

  const creatNewItem = () => {
    createTodo({
      variables: {
        content: '',
        taskListId: id,
      },
    });

    //   const newTodos = [...todos];
    //   newTodos.splice(atIndex, 0, {
    //     id: todos.length + 1,
    //     content: '',
    //     isCompleted: false,
    //   });
    //   setTodos(newTodos);
  };
  if (!project) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0}>
      <TextInput style={styles.title} value={title} onChangeText={setTitle} placeholder={'Title'} />
      <FlatList
        data={project?.todos}
        renderItem={({ item, index }) => <TodoItem todo={item} onSubmit={() => creatNewItem(index + 1)} />}
        style={{ width: '100%' }}
      />
    </KeyboardAvoidingView>
  );
};
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
    backgroundColor: '#ff8e0d',
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default ToDoScreen;
