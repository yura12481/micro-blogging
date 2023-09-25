import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

const Header = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Помилка виходу з облікового запису:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
