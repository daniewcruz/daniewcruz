import { Particles } from "@tsparticles/react";

const ParticlesBackground = () => {
    return (
        <div id="particles-background">
            {/* Fundo decorativo: círculos flutuantes que se afastam do cursor ao passar o mouse */}
            <Particles
                options={{
                    particles: {
                        number: {
                            value: 100,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 5,
                        },
                        opacity: {
                            value: 0.5,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
