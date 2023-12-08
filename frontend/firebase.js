import { initializeApp, getReactNativePersistence } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBba-KTkWqEbrDESDHckTGayWNttMdUSqI",
  authDomain: "unmask-86af4.firebaseapp.com",
  projectId: "unmask-86af4",
  storageBucket: "unmask-86af4.appspot.com",
  messagingSenderId: "457412314876",
  appId: "1:457412314876:web:367ac0dea7c49411847979",
};

let app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
