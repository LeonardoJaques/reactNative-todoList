import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckBoxProps {
  isChecked: boolean,
  onPress: () => void
}

const CheckBox = (props: CheckBoxProps) => {
  const { onPress } = props
  const isChecked = props.isChecked ? 'checkbox' : 'checkbox-outline'

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <Icon
        name={isChecked}
        color="#FFF"
        size={30}
      />
    </Pressable>
  );
};

export default CheckBox;



