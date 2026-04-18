import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [token, setToken] = useState('');

    const login = (userData) => {
        setIsLoggedIn(true);
        setUserName(userData.username);
        setUserRole(userData.role);
        setToken(userData.token);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserName('');
        setUserRole('');
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, userRole, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
