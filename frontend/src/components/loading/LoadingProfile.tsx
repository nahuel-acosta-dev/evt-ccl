import { Dispatch, FC, ReactNode, useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import {setProfile, clearProfile} from '../../redux/features/profile/profileSlice';
import { logOut } from '../../redux/features/auth/authSlice';
import {useGetProfileMeQuery} from '../../redux/features/profile/getProfileMeSlice';
import {Spinner, Button} from 'react-bootstrap';


type Props = {
    setLoading: Dispatch<Boolean>;
    setError: Dispatch<Boolean>;
};


const LoadingProfile: FC<Props> = ({setLoading, setError}) => {
    const dispatch = useDispatch();
    const {
        data: profile,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProfileMeQuery(null);

    console.log(error)

    useEffect(() =>  {
        if (isLoading === false){
            setError(isError);
            if(isSuccess && profile.id !== null) {
                dispatch(setProfile({...profile}));
                setLoading(isLoading);
            }
            else{
                console.log('isError:'+isError);
                console.log(error);
                console.log('fallo en el else');
            }
        }

    }, [isLoading, isError]);

    return(
        error === undefined ? 
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        :
        <div>
          Ocurrio un error al intentar hacer una solicitud al servidor.
          Por favor recargue la pagina o intente ingresar mas tarde. 
        </div>

    )
}

export default LoadingProfile;
