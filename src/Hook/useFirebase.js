
import { signOut, getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../firebase/firebase.init';

firebaseInitialize()
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    //google sign in
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider).then(res => {
            setUser(res.user);
        }).catch(err => {
            setError(err.message)

        });


    }
    //get the current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);



            } else {
                console.log("signedOut")

            }
        });
        return () => unsubscribe;
    }, []);

    //sign out 
    function logOut() {
        signOut(auth)
            .then(() => {
                setUser({});
                //sign success
            })
            .catch((error) => {
                setError(error.message)

            });
    }





    return { logOut,signInWithGoogle, user, error };
};

export default useFirebase;