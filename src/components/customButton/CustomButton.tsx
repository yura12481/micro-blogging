import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
