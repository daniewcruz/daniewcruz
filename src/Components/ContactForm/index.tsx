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
            {status === "success" && (
                <p className="contact-form-status success">Mensagem enviada! Retorno o mais rápido possível.</p>
            )}
            {status === "error" && (
                <p className="contact-form-status error">
                    Não consegui enviar agora. Tente de novo ou me chame direto no WhatsApp/email.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
