import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZp0d25aINoQAus8mXftPE9O2UErtrJxA',
  authDomain: 'ng-kitty-debug-right.firebaseapp.com',
  projectId: 'ng-kitty-debug-right',
  storageBucket: 'ng-kitty-debug-right.firebasestorage.app',
  messagingSenderId: '398137744473',
  appId: '1:398137744473:web:61280ed4015908ff0da548',
  measurementId: 'G-50CXHH10P1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
