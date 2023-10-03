import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";

const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser?.emailVerified) {
        alert("Please confirm your email!");
      }
    } catch (error) {
      console.log(error);
      alert("Sign in failed please write correct data.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn,
  };
};

export default useSignIn;
