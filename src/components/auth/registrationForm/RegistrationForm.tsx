import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import {
  isValidEmail,
  isValidPassword,
} from "../../../utils/validationUtils/validationUtils";
import useSignUp from "../../../utils/hooks/firebase/signUpHook/useSignUp";

import ValidationError from "../../validationError/ValidationError";
import CustomButton from "../../customButton/CustomButton";
import CustomActivityIndicator from "../../customActivityIndicator/CustomActivityIndicator";
import { Items } from "./types";

import { styles } from "./styles";

const RegistrationForm: React.FC = () => {
  const [checkValidEmail, setCheckValidEmail] = useState<boolean>(false);
  const [checkValidPassword, setCheckValidPassword] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    email,
    setEmail,
    password,
    setPassword,
    currentValue,
    setCurrentValue,
    loading,
    signUp,
  } = useSignUp();

  const { input, dropDownPickerContainer } = styles;

  const items: Items[] = [
    {
      label: "Author",
      value: "Author",
    },
    {
      label: "Commentator",
      value: "Commentator",
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

  return (
    <>
      <TextInput
        style={input}
        placeholder="Email"
        onChangeText={(value) => handleCheckEmail(value)}
        value={email}
      />
      {checkValidEmail && (
        <ValidationError text="This is not a valid email format." />
      )}
      <TextInput
        style={input}
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
        containerStyle={dropDownPickerContainer}
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={(value) => setCurrentValue(value)}
        maxHeight={100}
      />
      {loading ? (
        <CustomActivityIndicator />
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
