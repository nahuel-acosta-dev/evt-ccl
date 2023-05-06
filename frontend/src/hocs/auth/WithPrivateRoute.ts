import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../../redux/features/auth/authSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WithPrivateRoute = ({ children }: any) => {
  const router = useRouter();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {

      if (!token) {
        router.push('/auth/login');
      }

  }, []);

  return children
};

export default WithPrivateRoute;