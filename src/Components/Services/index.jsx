import React from "react";
import "./Services.css";
import { services } from "../../sources";

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Serviços</span>
                    </h1>
                    <p className="sub-title muted">
                        Soluções completas do design à implementação, com foco em resultado real.
                    </p>
                </div>
                <div className="services-container">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="flex-center icon-wrapper service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="muted service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
