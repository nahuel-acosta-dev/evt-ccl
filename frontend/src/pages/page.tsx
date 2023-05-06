"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import styles from './page.module.css'
import App from '../styles/App.module.scss'
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProtectedRoutes from '../constants/routes/ProtectedRoutes';
import { Props } from '@/src/types/generics';
import { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] })

export default function Home ({Component, pageProps}: AppProps) {
  const router = useRouter();
  console.log(router)

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <ProtectedRoutes router={router}>
        <SSRProvider>
        <Component {...pageProps} />
        </SSRProvider>
      </ProtectedRoutes>
    </Provider>
  )
}
