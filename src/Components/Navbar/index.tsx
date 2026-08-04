import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Navbar.css";
import {tabs} from "../../sources";
import { Link} from "react-scroll"
import Logo from "../../Commons/Logo";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import SocialHandles from "../../Commons/SocialHandles";

// Navbar fixa no topo, com menu lateral (sidebar) em telas estreitas.
// offset={-90} nos links de scroll compensa a altura da navbar fixa, pra não
// deixar o topo da seção de destino escondido atrás dela.
const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleSidebar = () => setOpenSidebar((previousState) => !previousState);

    useEffect(() => {
        // Navbar desce suavemente sobre o conteúdo ao carregar a página
        const context = gsap.context(() => {
            gsap.fromTo(
                navRef.current,
                { opacity: 0, y: -24 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            );
        });

        return () => context.revert();
    }, []);

    return (
        <nav className="navbar flex" ref={navRef}>
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
                    offset={-90}
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
                <Link to='contact' smooth={true} offset={-90} className="btn primary contact-btn">
                Contato
                </Link>

                <Link to='services' smooth={true} offset={-90} className="btn services-btn">
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