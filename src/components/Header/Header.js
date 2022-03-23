import React from "react";
import { motion } from "framer-motion";

import {
  HeaderIntro,
  HeaderName,
  HeaderTitle,
  ConnectButton,
  HeaderBox,
  FirstCircle,
  SecondCircle,
  Trapezoid,

} from "./headerStyles";

import { PageContainer } from "../../subComponents/pageContainer";

const Header = () => {
  return (
    <PageContainer>
      <FirstCircle/>
      <HeaderIntro>Hello my name is</HeaderIntro>
      <HeaderName>
        Jay Dampitan
      </HeaderName>
      <HeaderTitle>
        software developer from california
      </HeaderTitle>
      <SecondCircle/>

      <ConnectButton to="/contact">connect</ConnectButton>

      <HeaderBox>
        
      </HeaderBox>
     
    
    </PageContainer>
    
  );
};

export default Header;
