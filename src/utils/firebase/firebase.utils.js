import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvTha-SHCHBw_cLrFdTXCsfL3Wo4okP9M",
    authDomain: "crwn-clothing-db-596bd.firebaseapp.com",
    projectId: "crwn-clothing-db-596bd",
    storageBucket: "crwn-clothing-db-596bd.appspot.com",
    messagingSenderId: "813656405527",
    appId: "1:813656405527:web:0982ce34147f02e05dce52"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);