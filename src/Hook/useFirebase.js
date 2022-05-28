
import { GithubAuthProvider,signOut, getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../firebase/firebase.init';

firebaseInitialize()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


      //google sign in
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };

       //github sign in
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };
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





    return { logOut,signInWithGoogle, signInWithGithub, user, error };
};


export default useFirebase;