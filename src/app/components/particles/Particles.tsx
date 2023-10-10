"use client"

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function ParticlesBG () {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "rgb(49 51 58)",
                    },
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1500
                        }
                    },
                    line_linked: {
                        enable: true,
                        opacity: 0.1
                    },
                    size: {
                        value: 1.5
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05
                        }
                    }
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBG