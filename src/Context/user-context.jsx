import { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [isSignIn, setIsSignIn] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const value = { isSignIn, setIsSignIn, isLogIn, setIsLogIn, currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}