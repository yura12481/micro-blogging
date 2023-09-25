import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { User, onAuthStateChanged } from 'firebase/auth';

import RegistrationPage from './src/screens/auth/registrationPage/RegistrationPage';
import HomePage from './src/screens/homePage/HomePage';

import { FIREBASE_AUTH } from './FirebaseConfig';
import LoginPage from './src/screens/auth/loginPage/LoginPage';

export type RootStackParams = {
  LoginPage: undefined;
  RegistrationPage: undefined;
  HomePage: undefined;
  EmailVerificationPage: undefined;
};

const App: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  if (user && user.emailVerified) {
    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="RegistrationPage"
          component={RegistrationPage}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
