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
import styles from './page.module.css'
import App from '../styles/App.module.scss'
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Main from './Main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
    
  )
}
