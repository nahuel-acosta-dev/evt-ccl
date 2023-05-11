'use client';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken} from '../../redux-cfg/features/auth/authSlice';
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
      refresh: string | null
  }
}
const WithPrivateRoute = ( {children} : PropsJSX) => {
  const router = useRouter();
  //const {isLoading} = useSelector((state: AuthSlice) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(selectCurrentToken);
  console.log("este es el token: " + token);

  useEffect(() => {
      console.log('token', token);
      //console.log('isLoading', isLoading);
      if(!localStorage.getItem("authTokens") && !token){
          router.push('/auth/login');
          setIsLoading(false);
      }else{
        setIsLoading(false);
      }
  }, [token]);
  

  return (
    isLoading ?
    <Loading/>
    :
    children
    );
    
};

export default WithPrivateRoute;