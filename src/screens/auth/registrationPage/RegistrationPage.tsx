import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import RegistrationForm from '../../../components/auth/registrationForm/RegistrationForm';

import { RootStackParams } from '../../../../App';

import { styles } from './styles';

const RegistrationPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign On</Text>
      <RegistrationForm />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>or</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.registerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationPage;
