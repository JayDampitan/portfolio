import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import JD from '../assets/portfolio.jpg'


const AboutContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 63vh;
`;

const AboutTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 100%;
  font-size: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 5rem 15rem;
`

const ImageContainer = styled.div`
  height: 18rem;
  width: 18rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, red, yellow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopCircle = styled.div`
  height: 17.7rem;
  width: 17.7rem;
  border-radius: 50%;
  background: #160F29;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 97%;
  border-radius: 50%;
`;

const AboutMe = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  width: 50rem;
`;




// -------------About Page Variants

const aboutVariants = {
  hidden: {
    x: '-200vw'
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      mass: 0.4,
      type: 'spring',
      damping: 8,
    }
  }
};

const About = () => {
  return (
    <AboutContainer as = {motion.div}
      variants = {aboutVariants}
      initial = 'hidden'
      animate = 'visible'
    >

      <AboutTitle>Something About Me</AboutTitle>
      
      <ContentContainer>
      <ImageContainer>
        <TopCircle>
          <Image src={JD}/>
        </TopCircle>
      </ImageContainer>
      <AboutMe>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo facere ab recusandae nemo praesentium adipisci repellat quidem ratione perferendis voluptas reiciendis aperiam soluta amet, suscipit a dolorem vero culpa veniam temporibus nostrum impedit natus? Voluptate pariatur vitae omnis deserunt quas. .</AboutMe>

      </ContentContainer>
      


     
    </AboutContainer>
  )
}

export default About