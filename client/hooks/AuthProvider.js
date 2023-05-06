import { View, Text } from "react-native";
import React, { createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
};

export default {AuthProvider, AuthContext};