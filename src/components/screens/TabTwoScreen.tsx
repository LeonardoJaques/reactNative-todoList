import React from 'react'
import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View } from 'react-native'
import ProjectItem from '../ProjectItem'


const TabTwoScreen = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      title: 'Project 1',
      createdAt: "2d"
    },
    {
      id: 2,
      title: 'Project 2',
      createdAt: "2d"
    },
    {
      id: 3,
      title: 'Project 3',
      createdAt: "2d"
    },
  ])
  return (
    <View style={styles.container}>
      <FlatList
        data={project}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={styles.flatList}
      />
    </View>
  )
}
export default TabTwoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#000'

  },
  flatList: {
    width: "100%"
  }
})

