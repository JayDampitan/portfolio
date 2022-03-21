import React from "react";
import { motion } from "framer-motion";

import JD from "../../assets/portfolio.jpg";
import {
  AboutContainer,
  AboutTitle,
  ContentContainer,
  ImageContainer,
  TopCircle,
  Image,
  AboutMe,
} from "./aboutStyles";

// -------------About Page Variants

const aboutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <AboutContainer
      as={motion.div}
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
    >
      <AboutTitle>Something About Me</AboutTitle>

      <ContentContainer>
        <ImageContainer>
          <Image src={JD} />
        </ImageContainer>

        <AboutMe>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dicta
            rem, officia similique ex quis officiis voluptatum! Culpa adipisci
            et numquam, vero beatae, architecto iure consequuntur natus nihil
            odit reprehenderit aperiam, blanditiis doloribus laborum doloremque
            provident est ducimus veniam ipsa qui ut nam! Quis, quae? Neque
            explicabo tempora odio quia.
          </p>
        </AboutMe>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;
