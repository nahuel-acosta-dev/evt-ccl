import { FC } from "react";
import {Props} from '../types/generics';
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

const Layout: FC<Props> = (props) => {
  
    return (
        <>
            
            <main>
                <header>
                        <Navbar/>
                </header>
                {props.children}
                <Footer/>
            </main>
        </>
    )
}

export default Layout;