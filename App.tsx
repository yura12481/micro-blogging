import React from "react";

import useAuthStateChanged from "./src/utils/hooks/firebase/authStateChangedHook/useAuthStateChanged";

import AuthStackNavigator from "./src/navigation/authNavigation/AuthStackNavigator";

import MainStackNavigator from "./src/navigation/mainNavigation/MainStackNavigator";

const App: React.FC = () => {
  const { user } = useAuthStateChanged();

  if (user && user.emailVerified) {
    return <MainStackNavigator />;
  }

  return <AuthStackNavigator />;
};

export default App;
