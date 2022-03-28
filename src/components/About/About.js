import React from "react";
import { motion } from "framer-motion";
import { CSS, Framer,
  StyledComponents,
  HTML,
JavaScript,
ReactIcon,
ReduxIcon,
} from "../AllSvgs";

import JD from "../../assets/portfolio.jpg";
import {
  ContentContainer,
  ImageContainer,
  TopCircle,
  Image,
  AboutMe,
  SvgContainer,
  SvgBox,
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
      <ContentContainer>
        <ImageContainer>
          <Image src={JD} />
        </ImageContainer>
        <h2>Something About me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam laudantium rerum quia. Culpa expedita tempora provident saepe itaque laboriosam autem fugit minima amet hic eligendi unde necessitatibus sequi dolores voluptate, neque nesciunt. Rem dignissimos laudantium, impedit dolore quis expedita dicta illo repellendus, fugiat modi debitis, iusto quos nostrum officiis asperiores laborum aspernatur delectus hic. Iusto eligendi necessitatibus atque eius architecto hic dicta quo nam totam, natus nulla similique. Totam dolores error eos excepturi ullam vel commodi aperiam quas quod.</p>
       
      </ContentContainer>
      <SvgContainer>
      <SvgBox>< HTML fill='currentColor'/></SvgBox>
      <SvgBox><CSS  fill='currentColor'/></SvgBox>
      <SvgBox><JavaScript fill='currentColor'/></SvgBox>
      <SvgBox><ReactIcon fill='currentColor'/></SvgBox>
      <SvgBox><ReduxIcon fill='currentColor'/></SvgBox>
      <SvgBox><Framer fill='currentColor'/></SvgBox>
      <SvgBox><StyledComponents fill='currentColor'/></SvgBox>
      </SvgContainer>
      

 
      
    </PageContainer>
  );
};

export default About;
