import React, { useContext } from "react";
import { AuthContext } from "./ContextProvider";



const AuthButtons = () => {
  
 
    const [authState, setAuthState] = useContext(AuthContext);
    const [themeState, setThemeState] = useContext(AuthContext);
  

    
    return (
        <div>            
            {authState.isLogged ? (
                <button onClick={() => { setAuthState((state) => ({ ...state, isLogged: false }))} }>
                    Log out
                </button>
            ) : (
                    <button onClick={() => { setAuthState((state) => ({ ...state, isLogged: true }))} }>
                    Log in
                </button>
            )}



            {themeState.myTheme !=="light" ? (
                <button onClick={() => { setThemeState((state) => ({ ...state, myTheme: "light" })) }}>
                    light
                </button>
            ) : (
                    <button onClick={() => { setThemeState((state) => ({ ...state, myTheme: "dark" })) }}>
                   dark
                </button>
            )}

        </div>
    );
}
export default AuthButtons;