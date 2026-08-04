import "./Footer.css";
import { footer, socialHandles } from "../../sources";
import { Link } from "react-scroll";
import Logo from "../../Commons/Logo";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Rodapé: marca + redes sociais, colunas de navegação (geradas a partir de `footer` em sources)
// e o aviso de direitos autorais com o ano atual calculado em tempo de execução.
const Footer = () => {
    const footerRef = useScrollReveal<HTMLElement>({ childSelector: ".footer-brand, .footer-column", y: 30 });

    return (
        <footer className="footer" ref={footerRef}>
            <div className="wrapper footer-container">
                <div className="footer-brand">
                    <Logo />
                    <p className="muted">
                        Desenvolvedor Mobile Offline-First, ODOO e UI/UX Designer, criando soluções digitais completas do design à produção.
                    </p>
                    <div className="flex footer-socials">
                        {socialHandles.map((social, index) => (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-center icon-wrapper"
                                key={index}
                                title={social.name}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-columns">
                    {footer.map((column, index) => (
                        <div className="footer-column" key={index}>
                            <h4 className="footer-column-title">{column.title}</h4>
                            <div className="footer-routes">
                                {/* Rotas com `id` viram links de scroll; as sem `id` (ex.: email, localização) são só texto */}
                                {column.routes.map((route, routeIndex) =>
                                    route.id ? (
                                        <Link to={route.id} smooth={true} spy={true} offset={-90} key={routeIndex} className="footer-route">
                                            {route.name}
                                        </Link>
                                    ) : (
                                        <span className="footer-route muted" key={routeIndex}>
                                            {route.name}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <p className="muted">© {new Date().getFullYear()} Daniel Lucas da Silva Cruz. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
