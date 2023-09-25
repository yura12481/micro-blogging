import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';
import { styles } from './styles';

const MainBlock = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [text, setText] = useState<string>('');
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const name = user.email;
      setUserEmail(name);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.userText}>Welcome to your account {userEmail}!</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Write text..."
        value={text}
        onChangeText={(newText) => setText(newText)}
        style={styles.textArea}
      />
    </View>
  );
};

export default MainBlock;
