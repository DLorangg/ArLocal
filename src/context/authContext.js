import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
};

export function AuthProvider({ children }) {
    const signup = (email, password) => 
     createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) => {
     const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log(userCredential)
    }


    return (
        <authContext.Provider value={{ signup, login }}>
            {children}
        </authContext.Provider>
    );
}
