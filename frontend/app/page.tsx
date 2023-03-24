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
import Main from './Main';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <SSRProvider>
        <Main/>
      </SSRProvider>
    </Provider>
    
  )
}
