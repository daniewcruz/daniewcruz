import React from "react";
import { Particles } from "@tsparticles/react";

const ParticlesBackground = () => {
    return (
        <div id="particles-background">
            <Particles
                options={{
                    particles: {
                        number: {
                            value: 100,  // Aumente o número de partículas para garantir visibilidade
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 5,  // Ajuste o tamanho das partículas
                        },
                        opacity: {
                            value: 0.5, // Opacidade das partículas
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",  // Efeito de repulsão quando o mouse passa
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
