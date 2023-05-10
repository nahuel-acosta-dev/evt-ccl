"use client"
import {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { setCredentials } from '../../redux-cfg/features/auth/authSlice';
import Loading from '@/src/components/loading/Loading';
//cambiar nombre a PersistLogin, y enviar a carpeta features/auth
//guardar tokens en cookies una vez abierta la sesion.
//cada vez que se reinicie el navegador obtener los tokens de session y guardalos en setCredentials
//Si cierra la session limpiar los tokens de cookies
interface PropsJSX {
    children: JSX.Element
  }
  
const PersistLogin = ({children}: PropsJSX) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() =>  {
        const dataUser = () => {
            console.log("este es el valor en persistLogin:");
            console.log(JSON.parse(localStorage.getItem("authTokens") || '{}'))
            if (localStorage.getItem("authTokens") != null){
                let authTokens = JSON.parse(localStorage.getItem("authTokens") || '{}');
                dispatch(setCredentials({ ...authTokens, isLoading: false}));
                setIsLoading(false);
            }
            else{
                setIsLoading(false);
            }
        }

        dataUser();
    }, []);

    return (
        isLoading ?
            <Loading/>
            :
            children
        );
}

export default PersistLogin;