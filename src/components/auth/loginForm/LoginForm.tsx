import React, { useState } from 'react';
import { TextInput, Text, ActivityIndicator } from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { isValidEmail, isValidPassword } from '../../../utils/validationUtils';
import ValidationError from '../../validationError/ValidationError';
import CustomButton from '../../customButton/CustomButton';

import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

import { styles } from './styles';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkValidEmail, setCheckValidEmail] = useState<boolean>(false);
  const [checkValidPassword, setCheckValidPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckEmail = (value: string) => {
    setEmail(value);
    setCheckValidEmail(!isValidEmail(value));
  };

  const handleCheckPassword = (value: string) => {
    setPassword(value);
    setCheckValidPassword(!isValidPassword(value));
  };

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser?.emailVerified) {
        alert('Please confirm your email!');
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed please write correct data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleCheckEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => handleCheckPassword(text)}
      />
      {checkValidEmail || checkValidPassword ? (
        <ValidationError text="The login or password is incorrect." />
      ) : (
        <Text></Text>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : checkValidEmail ||
        checkValidPassword ||
        !email.length ||
        !password.length ? (
        <CustomButton title="Sign In" disabled={true} />
      ) : (
        <CustomButton title="Sign In" onPress={signIn} />
      )}
    </>
  );
};

export default LoginForm;
