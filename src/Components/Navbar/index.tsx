import { useState } from "react";
import "./Navbar.css";
import {tabs} from "../../sources";
import { Link} from "react-scroll"
import Logo from "../../Commons/Logo";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import SocialHandles from "../../Commons/SocialHandles";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleSidebar = () => setOpenSidebar((previousState) => !previousState);

    return (
        <nav className="navbar flex">
            {/* Fundo escurecido atrás do menu mobile; some quando o sidebar está fechado */}
            {openSidebar ? <div className="overlay" onClick={toggleSidebar} aria-hidden="true" /> : ""}
            <Logo/>
            <div className={`box flex-center tabs-group sidebar ${openSidebar ? "visible" : ""} `}>
                <div
                className="flex-center icon-wrapper cancel-btn"
                onClick={toggleSidebar}
                role="button"
                tabIndex={0}
                aria-label="Fechar menu"
                >
                    <FaTimes/>
                </div>
                {
                tabs.map((tab,index) => (
                    <Link
                    to={tab.id}
                    smooth={true}
                    spy={true}
                    className="tab"
                    activeClass="active"
                    onClick={() => setOpenSidebar(false)}
                    key={index}
                    >
                  
                    {tab.name}
                    </Link>
                ))
                }
            </div>
            <SocialHandles/>
            <div className="box flex-center buttons">
                <Link to='contact' smooth={true}  className="btn primary contact-btn">
                Contato
                </Link>

                <Link to='services' smooth={true}  className="btn services-btn">
                Serviços
                </Link>
            <div className="flex-center icon-wrapper menu-btn"
            onClick={toggleSidebar}
            role="button"
            tabIndex={0}
            aria-label="Abrir menu"
            aria-expanded={openSidebar}
            >
                <HiMenu/>
            </div>
        </div>

        </nav>
    )
}

export default Navbar