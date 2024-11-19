import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const updateUserProfile = (updatedData) =>{
        console.log(updatedData)
        return updateProfile(auth.currentUser, updatedData);
    }
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true);
        signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading,
        updateUserProfile,
        handleGoogleLogin,
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    }, [])
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    
};

export default AuthProvider;