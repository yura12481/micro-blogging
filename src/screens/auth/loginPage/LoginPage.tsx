import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LoginForm from '../../../components/auth/loginForm/LoginForm';

import { RootStackParams } from '../../../../App';

import { styles } from './styles';

const LoginPage: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>
      <LoginForm />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>or</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrationPage')}
        >
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
