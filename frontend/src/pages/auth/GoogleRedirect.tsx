import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setCredentials } from '../../redux-cfg/features/auth/authSlice';
import { selectCurrentToken } from '../../redux-cfg/features/auth/authSlice';
import { useRouter } from 'next/router';
import {useGoogleMutation} from '../../redux-cfg/features/auth/authGoogleSlice';
import queryString from 'query-string';

interface Details {
    state: string | null;
    code: string | null;
}

const GoogleRedirect = () => {
    let router = useRouter();
    let location = router.asPath;

    console.log('esta es la ruta en ggRedirect: ' + router.asPath);
    
    const token = useSelector(selectCurrentToken);
    const dispatch = useDispatch();
    const [google, { isLoading }] = useGoogleMutation();

    


    const googleAuth = async (urlDetails: any) => {
        try{
            const googleData: any = await google(urlDetails);
            const email = googleData.data.user;
            dispatch(setCredentials({ ...googleData.data,  email }));
            console.log(googleData);
            console.log(googleData.data);
            console.log(googleData.refresh);
            router.push('/app/home');
        }
        catch(err){
            console.log(err);
            router.push('/auth/errorLogin?error=error');
        }
    }

    useEffect(() => {
        let {state, code}: any = router.query;
        state = state ? state : null;
        code = code ? code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            
            const urlDetails = {
                state: state,
                code: code
              }
            
            googleAuth(urlDetails);
        }
    }, [location]);

    if(token){
        return router.push("/app/home");
    }

    return (
        <div className='container text-center'>
            Espere un Momento sera redirigido...
        </div>
    );
}

export default GoogleRedirect;