import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
