'use client';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../../redux-cfg/features/auth/authSlice';
import { useEffect } from 'react';
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

const WithPublicRoute = ( {children} : PropsJSX) => {
  const router = useRouter();
  const {isLoading} = useSelector((state: AuthSlice) => state.auth);
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
      if (!isLoading && token) {
        router.push('/');
      }

  }, [isLoading, token]);

  return (
        isLoading ? 
            (<Loading/>)
            :
            children
  );
    
};

export default WithPublicRoute;