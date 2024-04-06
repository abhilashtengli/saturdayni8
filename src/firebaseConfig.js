import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCK-HP0PtLFTArJyGs_ZgJP9ggKhKc1FwY",
  authDomain: "saturdayni8-33e48.firebaseapp.com",
  projectId: "saturdayni8-33e48",
  storageBucket: "saturdayni8-33e48.appspot.com",
  messagingSenderId: "474030590354",
  appId: "1:474030590354:web:0cf464259facd7e612d94b",
  measurementId: "G-KFVV3KV854",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
