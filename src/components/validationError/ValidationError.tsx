import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface ValidationErrorProps {
  text: string;
}

const ValidationError: React.FC<ValidationErrorProps> = ({ text }) => {
  return (
    <View style={styles.errorMessageContainer}>
      <Text style={styles.errorMessage}>{text}</Text>
    </View>
  );
};

export default ValidationError;
