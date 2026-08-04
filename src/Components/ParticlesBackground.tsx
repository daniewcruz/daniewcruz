import { ParticlesProvider, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// tsParticles v4 é totalmente modular: sem carregar um "bundle" (aqui, o slim),
// o engine não tem nem forma circular, nem movimento, nem interatividade registrados.
const initEngine = async (engine: Engine) => {
    await loadSlim(engine);
};

const ParticlesBackground = () => {
    return (
        <div id="particles-background">
            {/* Fundo decorativo: partículas conectadas por linhas finas, que se reorganizam
                suavemente conforme se movem e se aproximam do cursor (modo "grab"). */}
            <ParticlesProvider init={initEngine}>
                <Particles
                    id="tsparticles"
                    options={{
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 70,
                                density: { enable: true },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                            opacity: {
                                value: 0.4,
                            },
                            color: {
                                value: "#c2b434",
                            },
                            links: {
                                enable: true,
                                distance: 140,
                                color: "#c2b434",
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: { default: "out" },
                            },
                        },
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                            },
                            modes: {
                                grab: {
                                    distance: 180,
                                    links: { opacity: 0.5 },
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </ParticlesProvider>
        </div>
    );
};

export default ParticlesBackground;
