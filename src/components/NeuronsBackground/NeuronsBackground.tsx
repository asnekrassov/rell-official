import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Box } from "@mui/material";

const NeuronsBackground = () => {
  const options = {
    style: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        margin: "0",
        padding: "0",
        zIndex: "0"
    },
    fullScreen: {
      enable: false
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#fff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 3 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  //@ts-ignore
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Box sx={{}}>
      {
        //@ts-ignore
      <Particles options={options} init={particlesInit}/>
      }
    </Box>
  );
};

export default NeuronsBackground
