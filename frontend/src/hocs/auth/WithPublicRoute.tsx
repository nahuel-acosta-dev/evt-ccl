'use client';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../../redux-cfg/features/auth/authSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/src/components/loading/Loading';

interface PropsJSX {
  children: JSX.Element
}

interface AuthSlice {
    auth:{
        isLoading: boolean,
        access: string | null,
        //token: string | null,
        refresh: string | null
    }
}

const WithPublicRoute = ( {children} : PropsJSX) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: AuthSlice) => state.auth);
  const token = useSelector(selectCurrentToken);

  console.log('estamos en public');

  useEffect(() => {
    console.log('token', token);
    console.log('el valor de isLoading ahora es: ', isLoading);

}, [dispatch, isLoading]);

  useEffect(() => {
      console.log('token', token);
      //console.log('isLoading', isLoading);
      /*error solucionado */
        //al iniciar sesion me lleva a inicio ya que obtengo el token estando aun dentro de la pagina de login
        // y segun lo que pusimos aqui si estamos en login y ahi token entonces debe llevarme a inicio
        //es decir hay una contraposicion en el redireccionamiento de rutas private dice llevalo a home
        //pero aqui dice llevalo a inicio
      if (token) {
        router.push('/');
      }

  }, []);//lo arregle quitando el token de aqui, ahora no verifica cada vez que cambia el token

  return (
      children
  );
    
};

export default WithPublicRoute;