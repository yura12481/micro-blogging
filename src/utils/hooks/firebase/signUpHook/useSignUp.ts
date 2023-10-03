import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";

import { RootStackParams } from "../../../../components/navigation/authNavigation/types";

const useSignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("Author");
  const [loading, setLoading] = useState<boolean>(false);

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
        alert("Check and confirm your email address!");
        navigation.navigate("Login");
      } else {
        console.log("User is null.");
      }
    } catch (error) {
      console.log(error);
      alert("Sign up failed please write correct data.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    currentValue,
    setCurrentValue,
    loading,
    signUp,
  };
};

export default useSignUp;
