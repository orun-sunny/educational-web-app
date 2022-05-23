import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialize from '../firebase/firebase.init';

firebaseInitialize()
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    function signInWithGoogle (){
        signInWithPopup(auth, googleProvider)
        .then(res => {
            console.log(res.user)
        });


    }
    return {signInWithGoogle} ;
};

export default useFirebase;