import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    console.log(user)
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    
};

export default AuthProvider;