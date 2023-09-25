import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/layouts/header/Header';
import MainBlock from '../../components/layouts/mainBlock/MainBlock';

const HomePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainBlock />
    </SafeAreaView>
  );
};

export default HomePage;
