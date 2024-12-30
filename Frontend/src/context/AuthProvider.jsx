/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const inittialAuthUser = localStorage.getItem("Users"); 
    const [authUser, setAuthUser] = useState(
        inittialAuthUser ? JSON.parse(inittialAuthUser) : undefined
    );
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);