"use client"
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import ProtectedRoutes from '../constants/routes/ProtectedRoutes';
import type {AppProps} from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { NextComponentType } from 'next';
import { Session } from 'inspector';

const Noop = ({ children }: any) => <>{children}</>;


type CustomAppProps = AppProps & {
    Component: NextComponentType & { Auth?: any }
  }
//const MyApp = ({Component, pageProps}: AppProps) => { modificar el appProps para onclior el Component.Auth
//https://figueroanicolas-a.medium.com/crear-rutas-privadas-en-nextjs-2021-f%C3%A1cil-1425f4e9aef3

const MyApp = ({Component, pageProps}: CustomAppProps) => {
    const router = useRouter();

    const Auth = Component.Auth || Noop;

    console.log('la siguiente es la ruta')
    console.log(router.pathname)

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
    <Provider store={store}>
        {/*<ProtectedRoutes router={router}>*/}
        <Auth>
            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </Auth>
        {/*</ProtectedRoutes>*/}
    </Provider>
    )
}

export default MyApp;
