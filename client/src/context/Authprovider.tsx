import React, {ReactNode, createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    UserCredential,
    Auth,
    User,
    signOut,
    onAuthStateChanged
  } from "firebase/auth"
  import { auth } from "../config/firebaseConfig/firebase";

  export interface AuthProviderProps {
    children?: ReactNode
  }
  
export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}


//////////////////////////////////////////////////////////////////////////


export const userAuthContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextModel {
  auth: Auth
  user: User | null
  logIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  
  // sendPasswordResetEmail?: (email: string) => Promise<void>
}

 
export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const UserAuthContextProvider = ({children}: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState <User | null> (null);

     function signUp(email:string, password:string):  Promise<UserCredential>  {
        return createUserWithEmailAndPassword(auth, email, password);
     }
     function logIn(email:string, password:string): Promise<UserCredential> {
        // console.log("email",email);
        return signInWithEmailAndPassword(auth, email, password);
     }
    //  function logOut() {
    //     return signOut(auth);
    //  }

     useEffect(() => {
      //function that firebase notifies you if a user is set
      const unsubsrcibe = auth.onAuthStateChanged((user) => {
        setUser(user)
      })
      return unsubsrcibe
    }, [])

     const values = {
      signUp,
      user,
      logIn,
      // logOut,
      // resetPassword,
      auth,
    }

   
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useUserAuth = (): UserContextState => {
    return useContext(userAuthContext);

}