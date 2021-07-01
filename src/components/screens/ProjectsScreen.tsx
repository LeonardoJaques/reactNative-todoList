import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { View } from 'react-native';
import ProjectItem from '../ProjectItem';

const MY_PROJECTS = gql`
  query myTaskList {
    myTaskList {
      id
      title
      createdAt
    }
  }
`;

const ProjectsScreen = () => {
  const [project, setProjects] = useState([]);
  const { data, error } = useQuery(MY_PROJECTS);
  const navigation = useNavigation();
  useEffect(() => {
    if (error) {
      Alert.alert('Error fetching projects', error.message);
      navigation.navigate('SignUp');
    }
  }, [error, navigation]);

  useEffect(() => {
    if (data) {
      setProjects(data.myTaskList);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList data={project} renderItem={({ item }) => <ProjectItem project={item} />} style={styles.flatList} />
    </View>
  );
};
export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  flatList: {
    width: '100%',
  },
});
