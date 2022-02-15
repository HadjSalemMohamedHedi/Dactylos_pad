const initialState = { isLogged: false,theme:"light" };


export default function reducer(state = initialState, action) {
    switch (action.type) {

        case "SET_IS_LOGGED":
            return { ...state, isLogged: action.payload };
            
        case "SET_IS_DARK":
            return { ...state, theme: action.payload };

        default:
            return state;
    }
};


