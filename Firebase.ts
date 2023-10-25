import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//  My app's Firebase configuration   
const firebaseConfig = {
  apiKey: "AIzaSyCRu60fNVqAZrLXio9buUSN768MT8uCO7U",
  authDomain: "arlocal.firebaseapp.com",
  projectId: "arlocal",
  storageBucket: "arlocal.appspot.com",
  messagingSenderId: "297451769578",
  appId: "1:297451769578:web:4306bf0795b430c7e6d193"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);