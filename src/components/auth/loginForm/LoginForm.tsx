import React, { useState } from "react";
import { TextInput, Text } from "react-native";

import {
  isValidEmail,
  isValidPassword,
} from "../../../utils/validationUtils/validationUtils";
import useSignIn from "../../../utils/hooks/firebase/signInHook/useSignIn";

import ValidationError from "../../validationError/ValidationError";
import CustomButton from "../../customButton/CustomButton";
import CustomActivityIndicator from "../../customActivityIndicator/CustomActivityIndicator";

import { styles } from "./styles";

const LoginForm: React.FC = () => {
  const [checkValidEmail, setCheckValidEmail] = useState<boolean>(false);
  const [checkValidPassword, setCheckValidPassword] = useState<boolean>(false);

  const { email, setEmail, password, setPassword, loading, signIn } =
    useSignIn();

  const { input } = styles;

  const handleCheckEmail = (value: string) => {
    setEmail(value);
    setCheckValidEmail(!isValidEmail(value));
  };

  const handleCheckPassword = (value: string) => {
    setPassword(value);
    setCheckValidPassword(!isValidPassword(value));
  };

  return (
    <>
      <TextInput
        style={input}
        placeholder="Email"
        onChangeText={(text) => handleCheckEmail(text)}
        value={email}
      />
      <TextInput
        style={input}
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
        <CustomActivityIndicator />
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
