import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const ParticlesFX = () => {

  const particlesInit = useCallback(async (Engine) => {
    await loadFull(Engine)
  }, []);

  return (
    <Particles
        id="sparticles"
        className="absolute h-[300%] w-full"
        init={particlesInit}
        options={{
            fullScreen: false,
            particles: {
            number: {
                value: 0,
            },
            color: {
                value: '#ffffff',
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 0.6,
                random: true,
                animation: {
                enable: false,
                speed: 0.5,
                minimumValue: 0,
                sync: false,
                },
            },
            size: {
                value: 3,
                random: {
                enable: true,
                minimumValue: 1,
                },
                animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false,
                },
            },
            move: {
                enable: true,
                gravity: {
                enable: true,
                acceleration: -0.5,
                },
                speed: 1.5,
                direction: 'top',
                random: false,
                straight: false,
                outModes: {
                default: 'destroy',
                bottom: 'none',
                },
                attract: {
                enable: true,
                distance: 300,
                rotate: {
                    x: 600,
                    y: 1200,
                },
                },
            },
            },
            interactivity: {
            detectsOn: 'canvas',
            events: {
                resize: true,
                onClick: {
                enable: true,
                mode: 'push',
                },
            },
            },
            detectRetina: false,
            emitters: [
            {
                direction: 'top',
                particles: {
                color: '#fff',
                },
                rate: {
                quantity: 1,
                delay: 0.6,
                },
                size: {
                width: 100,
                height: 10,
                },
                position: {
                x: 50,
                y: 100,
                },
            },
            {
                direction: 'top',
                particles: {
                color: '#fff',
                },
                rate: {
                quantity: 1,
                delay: 0.6,
                },
                size: {
                width: 100,
                height: 10,
                },
                position: {
                x: 50,
                y: 100,
                },
            },
            ],
        }}
        />
    );
    };

export default ParticlesFX