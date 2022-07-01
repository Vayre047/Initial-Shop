import { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
});

export const UserProvider = ({ children }) => {
    const [isSignIn, setSignIn] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const value = { isSignIn, setSignIn, isLogIn, setIsLogIn };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}