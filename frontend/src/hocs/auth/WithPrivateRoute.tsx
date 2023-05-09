'use client';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../../redux-cfg/features/auth/authSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface PropsJSX {
  children: JSX.Element
}

const WithPrivateRoute = ( {children} : PropsJSX) => {
  const router = useRouter();
  
  const token = useSelector(selectCurrentToken);
  console.log("este es el token: " + token);

  useEffect(() => {
      const existTokens = localStorage.getItem('authTokens');
      //verificamos los tokens del localStorage
      //puede ser que haya un error en caso de que el token no se borre y nunca redirija a login
      //verificar
      if (!existTokens && !token) {
        router.push('/auth/login');
      }

  }, [token]);

  return (<>{children}</>);
    
};

export default WithPrivateRoute;