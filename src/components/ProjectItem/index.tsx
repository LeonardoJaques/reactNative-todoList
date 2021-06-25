import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FC } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface ProjectItemProps {
  project: {
    id: number,
    title: string,
    createdAt: string

  }
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {

  const navigation = useNavigation()


  const onPress = () => {
    navigation.navigate('ToDoScreen', { id: project.id })
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#6a51ae' }} >
      <Pressable onPress={onPress} style={styles.root}>
        <View style={styles.iconContainer}>
          <Icon
            name="document"
            color="#000"
            size={30}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titles} >{project.title}</Text>
          <Text style={styles.time}>{project.createdAt}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProjectItem

