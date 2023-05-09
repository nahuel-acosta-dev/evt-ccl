import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Tokens, Auth} from '../../../types/tokens';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isLoading: true, 
        token: null, 
        refresh: null,
        //error: null,
        isSuccess: false,
        //isAuthenticated: false,
    },
    reducers:{
        setCredentials: (state, action: PayloadAction<Tokens>) => {
            const {access, refresh} = action.payload;
            console.log(access, refresh);
            console.log('action', action)
            state.token = access;
            state.refresh = refresh;
            //llenamos credenciales y guardamos en localStorage
            localStorage.removeItem("authTokens");
            console.log('authSlice: access: ' + state.token);
            localStorage.setItem("authTokens", JSON.stringify(action.payload));
            state.isLoading = false;
            state.isSuccess = true;
        },
        logOut: (state) => {
            //limpiamos credenciales y localStorage
            state.token = null;
            state.refresh = null;
            //localStorage.removeItem("authTokens");
            localStorage.clear();
            state.isLoading = false;
            state.isSuccess = true;
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: Auth): string => state.auth.token;
//cambiar por el tipo de dato correspondiente