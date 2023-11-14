import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRu60fNVqAZrLXio9buUSN768MT8uCO7U",
  authDomain: "arlocal.firebaseapp.com",
  projectId: "arlocal",
  storageBucket: "arlocal.appspot.com",
  messagingSenderId: "297451769578",
  appId: "1:297451769578:web:4306bf0795b430c7e6d193",
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const auth = initializeAuth (app, {
  persistence: getReactNativePersistence(AsyncStorage),
}); export {auth}

export const firestore = getFirestore(app);

 