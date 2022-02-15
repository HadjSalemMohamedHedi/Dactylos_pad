import React, { useState, createContext } from "react";

const AuthContext = createContext();
const ThemeContext = createContext();


const AuthProvider = (props) => {
    const [authState, setAuthState] = useState({ isLogged: "false" });

    return (
        <AuthContext.Provider value={ [authState, setAuthState] }>
            {props.children}
        </AuthContext.Provider>
    );
};


const ThemeProvider = (props) => {
    const [themeState, setThemeState] = useState({ isLogged: "false" });

    return (
        <ThemeContext.Provider value={[themeState, setThemeState]}>
            {props.children}
        </ThemeContext.Provider>
    );
};




export { ThemeContext, ThemeProvider, AuthContext, AuthProvider};
