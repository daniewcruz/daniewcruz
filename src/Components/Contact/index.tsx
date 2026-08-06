import "./Contact.css";
import { contactOptions, socialHandles } from "../../sources";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Seção de contato: dados diretos (email/telefone/localização) + links de redes sociais.
const Contact = () => {
    const sectionRef = useScrollReveal<HTMLElement>({ childSelector: ".contact-option, .contact-socials" });

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Contato</span>
                    </h1>
                    <p className="sub-title muted">
                        Vamos conversar sobre seu próximo projeto.
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contact-options">
                        {contactOptions.map((option, index) => (
                            <div className="contact-option" key={index}>
                                <div className="flex-center icon-wrapper">
                                    {option.icon}
                                </div>
                                <div>
                                    <h4 className="contact-option-title muted">{option.title}</h4>
                                    {option.link ? (
                                        <a href={option.link}>{option.value}</a>
                                    ) : (
                                        <p>{option.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="contact-socials">
                        <p className="muted">Me encontre também em:</p>
                        <div className="flex contact-socials-icons">
                            {socialHandles.map((social, index) => (
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-center icon-wrapper"
                                    key={index}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
