import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentProfile } from '../../redux/features/profile/profileSlice';
import { selectCurrentToken } from '../../redux/features/auth/authSlice';
import { logOut } from '../../redux/features/auth/authSlice';
import { appRoutes } from '../routes';
import { ProfileUser } from '@/src/types/profile';

import { useRouter } from 'next/navigation';

type Props = {
    router: any,
    children: JSX.Element,
};

const isBrowser = () => typeof window !== 'undefined';


const ProtectedRoutes = ({router, children}: Props) => {
    const token = useSelector(selectCurrentToken);
    console.log('hay token:' + token);
    const navigate = useRouter();
    const profile: ProfileUser = useSelector(selectCurrentProfile);
    //podria usar el slice para verificar el token o simplemente permitir ingresar y luego de intentar
    //obtener los datos se borraria en caso de que el token este vencido o ingresaria si aun sirve

    let publicRoutes = [
        appRoutes.INDEX,
        appRoutes.LOGIN_PAGE
        
    ];
    let pathIsProtected = publicRoutes.indexOf(router.pathname) === -1;
    console.log(router.pathname)

    if(isBrowser() && !token && pathIsProtected){
    //if(isBrowser() && !profile && pathIsProtected){ 
        //con profile no funciona por el momento, debido que profile siempre es true
        if(router.pathname !== appRoutes.LOGIN_PAGE) navigate.push(appRoutes.LOGIN_PAGE);
    }else if(isBrowser() && token && router.pathname === appRoutes.LOGIN_PAGE){
    //else if(isBrowser() && profile && router.pathname === appRoutes.LOGIN_PAGE){
        navigate.back();
    }

    return children;

}


export default ProtectedRoutes;


