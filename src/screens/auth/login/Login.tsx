import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import LoginForm from "../../../components/auth/loginForm/LoginForm";
import KeyboardAvoidingWrapper from "../../../components/keyboardAvoidingWrapper/KeyboardAvoidingWrapper";

import { RootStackParams } from "../../../navigation/authNavigation/types";

import { styles } from "./styles";

const Login: React.FC = () => {
  const {
    container,
    titleText,
    registerContainer,
    registerText,
    registerLink,
    keyboardContainer,
  } = styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <KeyboardAvoidingWrapper
      keyboardContainer={keyboardContainer}
      containerStyle={container}
    >
      <>
        <Text style={titleText}>Sign In</Text>
        <LoginForm />
        <View style={registerContainer}>
          <Text style={registerText}>or</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
