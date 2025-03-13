import { initializeApp } from 'firebase/app'; 
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore, 
    doc, 
    getDoc, 
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvpsvA17M2mhCB3iNe8t4C5nJ9ng3xxYk",
    authDomain: "crwn-clothing-db-ae4d0.firebaseapp.com",
    projectId: "crwn-clothing-db-ae4d0",
    storageBucket: "crwn-clothing-db-ae4d0.firebasestorage.app",
    messagingSenderId: "929604374626",
    appId: "1:929604374626:web:cd2cc095091b8fc3fc013b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    if(!userAuth) return; 

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);  
    console.log(userSnapshot.exists());
  
    // if user data does not exists 
    // create /set the document with the data from userAuth in my collection 
    if(!userSnapshot.exists()) {
        const { displayName, email }  = userAuth; 
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt, 
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message); 
        }
    }
    
    // console.log(userDocRef);
    // if user data exists 
    return userDocRef; 
    // return userDocRef 
}

export const createAuthUserWithEmailPassword = async (email, password) => {
    if(!email || !password) return; 
    
    return await createUserWithEmailAndPassword(auth, email, password);

}
