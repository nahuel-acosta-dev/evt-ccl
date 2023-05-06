import Image from 'next/image';
import {Container, Nav, Navbar} from "react-bootstrap";
import Buble from '../../img/Buble.svg';
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/useScrollListener";

const NavBar = () => {

  const [navClassList, setNavClassList] = useState<Array<String>>([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: Array<String> = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);

  }, [scroll.y, scroll.lastY]);
    
    return(
        <nav className={
          scroll.y > 150 && scroll.y - scroll.lastY > 0 
          ? 
            "navbar navbar-dark bg-transparent fixed-top my-navbar nav-bar--hidden" 
          : 
          (scroll.y < 615 ?
            "navbar navbar-dark bg-transparent fixed-top my-navbar"
            :
            "navbar navbar-dark bg-transparent fixed-top my-navbar nav-bar--hidden"
            )
        }
          >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={Buble} alt="Logo" 
            width="100" height="50" className="d-inline-block align-text-top"/>
          </a>
          <ul className="nav justify-content-end nav-small">
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">IGLESIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">NOTICIAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">GALERIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">RADIO</a>
            </li>
          </ul>
          <button className="navbar-toggler my-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} 
          id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header justify-content-end">
              <button type="button" className="btn-close btn-close-white" 
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <Sidebar/>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;