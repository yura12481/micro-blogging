import { initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCSHxSB83itmFjt-x3ss52BXrzWi4tWOhI',
  authDomain: 'micro-blogging-9f077.firebaseapp.com',
  projectId: 'micro-blogging-9f077',
  storageBucket: 'micro-blogging-9f077.appspot.com',
  messagingSenderId: '823262957260',
  appId: '1:823262957260:web:e3323f5fb3d7cdded93c69',
  measurementId: 'G-30YESF1EPP',
};

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: reactNativePersistence(AsyncStorage),
});
