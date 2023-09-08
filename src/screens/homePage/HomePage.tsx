import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const name = user.email;
      setUserEmail(name);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userText}>Welcome to your account {userEmail}!</Text>
    </SafeAreaView>
  );
};

export default HomePage;
