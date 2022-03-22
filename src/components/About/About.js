import React from "react";
import { motion } from "framer-motion";

import JD from "../../assets/portfolio.jpg";
import {
  ContentContainer,
  ImageContainer,
  TopCircle,
  Image,
  AboutMe,
} from "./aboutStyles";

import { PageContainer } from "../../subComponents/pageContainer";

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
    <PageContainer>
      {/* <ContentContainer>
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
      </ContentContainer> */}
    </PageContainer>
  );
};

export default About;
