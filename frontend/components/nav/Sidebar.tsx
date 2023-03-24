import {Container, Nav, Navbar} from "react-bootstrap";

const Sidebar = () => {

    
    return(
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 list-unstyled ps-0">
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center 
                rounded collapsed text-white" 
                data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    NOSOTROS
                </button>
                <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-light rounded">Overview</a></li>
                    <li><a href="#" className="link-light rounded">Updates</a></li>
                    <li><a href="#" className="link-light rounded">Reports</a></li>
                </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    MINISTERIOS
                </button>
                <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-light rounded">Overview</a></li>
                    <li><a href="#" className="link-light rounded">Weekly</a></li>
                    <li><a href="#" className="link-light rounded">Monthly</a></li>
                    <li><a href="#" className="link-light rounded">Annually</a></li>
                </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    CONGRESOS
                </button>
                <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-light rounded">New</a></li>
                    <li><a href="#" className="link-light rounded">Processed</a></li>
                    <li><a href="#" className="link-light rounded">Shipped</a></li>
                    <li><a href="#" className="link-light rounded">Returned</a></li>
                </ul>
                </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                SATELITES
                </button>
                <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-light rounded">New...</a></li>
                        <li><a href="#" className="link-light rounded">Profile</a></li>
                        <li><a href="#" className="link-light rounded">Settings</a></li>
                        <li><a href="#" className="link-light rounded">Sign out</a></li>
                    </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed text-white" 
                data-bs-toggle="collapse" data-bs-target="#account-collapse" 
                aria-expanded="false">
                CAPACITACIÓN
                </button>
                <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-light rounded">New...</a></li>
                        <li><a href="#" className="link-light rounded">Profile</a></li>
                        <li><a href="#" className="link-light rounded">Settings</a></li>
                        <li><a href="#" className="link-light rounded">Sign out</a></li>
                    </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                CONTACTO
                </button>
                <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-light rounded">New...</a></li>
                        <li><a href="#" className="link-light rounded">Profile</a></li>
                        <li><a href="#" className="link-light rounded">Settings</a></li>
                        <li><a href="#" className="link-light rounded">Sign out</a></li>
                    </ul>
                </div>
            </li>
            </ul>
)
}

export default Sidebar;