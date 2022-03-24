import React from "react";
import { motion } from "framer-motion";

import {
  HeaderIntro,
  HeaderName,
  HeaderTitle,
  ConnectButton,
  HeaderBox,
  CircleContainer,
  FirstCircle,
  Square,
  FirstLine,
  SecondLine,
  SquareContainer,
  SecondSquareContainer,
  SecondSquare,
  Trapezoid,

} from "./headerStyles";

import { PageContainer } from "../../subComponents/pageContainer";

const Header = () => {
  return (
    <PageContainer>
      <CircleContainer>
        <FirstLine 
          as = {motion.div}
          initial = {{
            x: -100
          }}
          animate = {{
            x: 1
          }}
          transition ={{
            duration: 1
          }}
        />
        <FirstCircle/>
      </CircleContainer>
     
      <HeaderIntro>Hello my name is</HeaderIntro>
      <HeaderName
        as = {motion.div}
        initial = {{
          x: -100
        }}
        animate = {{
          x: 1
        }}
        transition = {{
          duration: 2
        }}
      >
        Jay Dampitan
      </HeaderName>
      <HeaderTitle>
        software developer from california
      </HeaderTitle>
      <SquareContainer>
        <Square/>
        <SecondLine/>
      </SquareContainer>
      <SecondSquareContainer>
        <SecondSquare/>
      </SecondSquareContainer>
     

      <ConnectButton to="/contact">connect</ConnectButton>

      <HeaderBox>
        
      </HeaderBox>
     
    
    </PageContainer>
    
  );
};

export default Header;
