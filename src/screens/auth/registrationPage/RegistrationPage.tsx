import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import CustomButton from '../../../components/customButton/CustomButton';

import { styles } from './styles';

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign On</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign On" />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>or</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.registerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationPage;
