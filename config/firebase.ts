// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {initializeAuth, getReactNativePersistence, getAuth} from 'firebase/auth'
// import AsyncStore from '@react-native-async-storage/async-storage';
// import {getFirestore} from 'firebase/firestore';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAl-wDo0ArfYIPBmowVnLurSMfdcHEJITU",
//   authDomain: "expense-tracker-a330d.firebaseapp.com",
//   projectId: "expense-tracker-a330d",
//   storageBucket: "expense-tracker-a330d.firebasestorage.app",
//   messagingSenderId: "275760059311",
//   appId: "1:275760059311:web:b2b0a70071914bdf0a155a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // export const auth = initializeAuth(app, {
// //     persistence: getReactNativePersistence(AsyncStore)
// // })

// let _auth: ReturnType<typeof getAuth> | null = null;

// export const getAuthInstance = () => {
//     if (!_auth) {
//         _auth = initializeAuth(app, {
//             persistence: getReactNativePersistence(AsyncStore),
//         });
//     }
//     return _auth;
// };

// export const firestore = getFirestore(app);





// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth/react-native"; // ✅ Use correct path
// import AsyncStorage from "@react-native-async-storage/async-storage"; // ✅ Use the standard name
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAl-wDo0ArfYIPBmowVnLurSMfdcHEJITU",
//   authDomain: "expense-tracker-a330d.firebaseapp.com",
//   projectId: "expense-tracker-a330d",
//   storageBucket: "expense-tracker-a330d.appspot.com", // 🛠️ FIXED this line!
//   messagingSenderId: "275760059311",
//   appId: "1:275760059311:web:b2b0a70071914bdf0a155a"
// };

// const app = initializeApp(firebaseConfig);

// let _auth: ReturnType<typeof getAuth> | null = null;

// export const getAuthInstance = () => {
//   if (!_auth) {
//     _auth = initializeAuth(app, {
//       persistence: getReactNativePersistence(AsyncStorage),
//     });
//   }
//   return _auth;
// };

// export const firestore = getFirestore(app);




// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAl-wDo0ArfYIPBmowVnLurSMfdcHEJITU",
//   authDomain: "expense-tracker-a330d.firebaseapp.com",
//   projectId: "expense-tracker-a330d",
//   storageBucket: "expense-tracker-a330d.appspot.com",
//   messagingSenderId: "275760059311",
//   appId: "1:275760059311:web:b2b0a70071914bdf0a155a"
// };

// const app = initializeApp(firebaseConfig);
// // let _auth : ReturnType<typeof getAuth> | null;

// const getAuthInstance = () => {
//   return getAuth(app);
// }
// // const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { getAuthInstance, firestore };

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAl-wDo0ArfYIPBmowVnLurSMfdcHEJITU',
  authDomain: 'expense-tracker-a330d.firebaseapp.com',
  projectId: 'expense-tracker-a330d',
  storageBucket: 'expense-tracker-a330d.appspot.com',
  messagingSenderId: '275760059311',
  appId: '1:275760059311:web:b2b0a70071914bdf0a155a',
};

const app = initializeApp(firebaseConfig);

// ✅ Initialize auth just once with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const firestore = getFirestore(app);

export { app, auth, firestore };
