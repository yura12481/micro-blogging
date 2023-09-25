import React, { useState } from 'react';
import { TextInput, Text, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';

import { isValidEmail, isValidPassword } from '../../../utils/validationUtils';
import ValidationError from '../../validationError/ValidationError';
import CustomButton from '../../customButton/CustomButton';

import { FIREBASE_AUTH } from '../../../../FirebaseConfig';
import { RootStackParams } from '../../../../App';

import { styles } from './styles';

interface IItems {
  label: string;
  value: string;
}

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkValidEmail, setCheckValidEmail] = useState<boolean>(false);
  const [checkValidPassword, setCheckValidPassword] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('Author');
  const [loading, setLoading] = useState<boolean>(false);

  const items: IItems[] = [
    {
      label: 'Author',
      value: 'Author',
    },
    {
      label: 'Commentator',
      value: 'Commentator',
    },
  ];

  const handleCheckEmail = (value: string) => {
    setEmail(value);
    setCheckValidEmail(!isValidEmail(value));
  };

  const handleCheckPassword = (value: string) => {
    setPassword(value);
    setCheckValidPassword(!isValidPassword(value));
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        await updateProfile(user, {
          displayName: currentValue,
        });
        await sendEmailVerification(user);
        alert('Check and confirm your email address!');
        navigation.navigate('LoginPage');
      } else {
        console.log('User is null.');
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed please write correct data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => handleCheckEmail(value)}
        value={email}
      />
      {checkValidEmail && (
        <ValidationError text="This is not a valid email format." />
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => handleCheckPassword(value)}
      />
      {checkValidPassword ? (
        <ValidationError text="The password must contain at least 6 characters, one uppercase letter and one lowercase letter." />
      ) : (
        <Text></Text>
      )}
      <DropDownPicker
        containerStyle={{
          alignSelf: 'center',
          width: '90%',
          marginBottom: 10,
        }}
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={(value) => setCurrentValue(value)}
        maxHeight={100}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : checkValidEmail ||
        checkValidPassword ||
        !email.length ||
        !password.length ? (
        <CustomButton title="Create account" disabled={true} />
      ) : (
        <CustomButton title="Create account" onPress={signUp} />
      )}
    </>
  );
};

export default RegistrationForm;
