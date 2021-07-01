import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}

const CheckBox = (props: CheckBoxProps) => {
  const { onPress, isChecked } = props;
  const valid = isChecked ? 'checkbox' : 'checkbox-outline';

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <Icon name={valid} color="#FFF" size={30} />
    </Pressable>
  );
};

export default CheckBox;
