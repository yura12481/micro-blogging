import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import RegistrationForm from "../../../components/auth/registrationForm/RegistrationForm";
import KeyboardAvoidingWrapper from "../../../components/keyboardAvoidingWrapper/KeyboardAvoidingWrapper";

import { RootStackParams } from "../../../navigation/authNavigation/types";

import { styles } from "./styles";

const Registration: React.FC = () => {
  const {
    container,
    titleText,
    registerContainer,
    registerText,
    registerLink,
    keyboardContainer,
  } = styles;

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <KeyboardAvoidingWrapper
      keyboardContainer={keyboardContainer}
      containerStyle={container}
    >
      <>
        <Text style={titleText}>Sign On</Text>
        <RegistrationForm />
        <View style={registerContainer}>
          <Text style={registerText}>or</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={registerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardAvoidingWrapper>
  );
};

export default Registration;
