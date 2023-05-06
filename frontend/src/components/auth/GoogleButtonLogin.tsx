import { useEffect, useRef, useState } from 'react';
import { redirect } from 'next/navigation';
import {useRouter} from 'next/router';
import Loading from '../../components/loading/Loading';
import axios from 'axios';
import queryString from 'query-string';
import GoogleButton from 'react-google-button'

axios.defaults.withCredentials = true;

const GoogleButtonLogin = () => {
  const [stateLoading, setStateLoading] = useState<Boolean>(false);
  const errRef = useRef<HTMLInputElement>(null);
  const [errMsg, setErrMsg] = useState<string>('');
  const localhost_300 = process.env.NEXT_PUBLIC_API_LOCAL_URL;
  const localhost_8000 = process.env.NEXT_PUBLIC_API_URL;
  console.log('ME ENCUENTRO EN GOOGLEBUTTON');
  console.log('localhost_300', localhost_300);
  console.log('localhost_8000', localhost_8000);
  let router = useRouter();

  useEffect(() => {
    const values = queryString.parse(router.pathname);
    const error = values.error ? values.error : null;
    if (error) {
      setErrMsg("Error signing in to Google");
    }
}, [router.pathname]);

  const continueWithGoogle = async () => {
    try {
        const res = await axios.get(
          `${localhost_8000}/auth/o/google-oauth2/?redirect_uri=${localhost_300}/google/`);
        console.log(res)
        console.log(res.data.authorization_url)
        window.location.replace(res.data.authorization_url);
        console.log('error en el try');
    } catch (err) {
        console.log("Error logging in");
        console.log('fallo en el catch');
    }
};

  return(
    <div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <GoogleButton className='mx-auto mt-3' onClick={continueWithGoogle}>
        {
          stateLoading ?
          <Loading/>
          :
          <>Continue With Google</>
        }
      </GoogleButton>
    </div>
  )
}

export default GoogleButtonLogin;