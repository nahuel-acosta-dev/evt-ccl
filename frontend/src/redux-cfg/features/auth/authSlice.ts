import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Tokens, Auth} from '../../../types/tokens';


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: null, 
        refresh: null,
        isLoading: true, 
        error: false,
    },
    reducers:{
        /*startLoading: state => {
            state.isLoading = true;
        },
        hasError: (state, action) =>{
            state.error = action.payload;
            state.isLoading = false;
        },*/
        setCredentials: (state, action: PayloadAction<Tokens>) => {
            console.log('entramos al reducer');
            state.isLoading = true;
            const {access, refresh} = action.payload;
            console.log(access, refresh);
            console.log('action', action)
            state.token = access;
            state.refresh = refresh;
            //llenamos credenciales y guardamos en localStorage
            localStorage.removeItem("authTokens");
            localStorage.setItem("authTokens", JSON.stringify(action.payload));
            state.isLoading = false;
        },
        logOut: (state) => {
            //limpiamos credenciales y localStorage
            state.token = null;
            state.refresh = null;
            //localStorage.removeItem("authTokens");
            localStorage.clear();
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: Auth): string => state.auth.token;
export const selectCurrentLoading = (state: any): boolean => state.auth.isLoading;
