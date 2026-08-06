import { useState, FormEvent } from "react";
import "./ContactForm.css";
import { FORMSPREE_ENDPOINT } from "../../sources";

type Status = "idle" | "sending" | "success" | "error";

// Envia o formulário direto pro Formspree via fetch (sem reload de página).
// Não precisa de backend próprio: o Formspree encaminha a mensagem pro e-mail
// cadastrado na conta.
const ContactForm = () => {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        setStatus("sending");
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="contact-form-card contact-form-success">
                <svg className="success-check" viewBox="0 0 64 64" width="56" height="56">
                    <circle className="success-check-circle" cx="32" cy="32" r="29" fill="none" strokeWidth="3" />
                    <path className="success-check-mark" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M19 33.5L28 42L45 23" />
                </svg>
                <h3>Mensagem enviada</h3>
                <p className="muted">Recebi o que você escreveu e retorno o mais rápido possível.</p>
                <button type="button" className="btn contact-form-reset" onClick={() => setStatus("idle")}>
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="contact-form-field">
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" required placeholder="Seu nome" />
            </div>
            <div className="contact-form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="seu@email.com" />
            </div>
            <div className="contact-form-field">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required placeholder="Conte um pouco sobre a vaga ou o projeto" />
            </div>
            <button type="submit" className="btn primary contact-form-submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>
            {status === "error" && (
                <p className="contact-form-status error">
                    Não consegui enviar agora. Tente de novo ou me chame direto no WhatsApp/email.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
