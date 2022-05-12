import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentContainer = styled(motion.div)`
  grid-area: 3/4/12/11;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};

  @media (max-width: 1400px) {
    grid-area: 3/3/12/12;
  }
  @media (max-width: 840px) {
    grid-area: 3/2/13/13;
    height: 95%;
    justify-content: center;
  }
  @media (max-width: 420px) {
    grid-area: 3/2/13/13;
    height: 95%;
    box-shadow: none;
    border: none;
    padding-top: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 78%;
  height: 90%;
  grid-area: 2/3/6/5;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.orange};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 0.4rem;

  @media (max-width: 1400px) {
    grid-area: 1/6/4/9;
    align-self: flex-end;
  }

  @media (max-width: 1024px) {
    grid-area: 1/6/4/9;
    width: 80%;
    height: 80%;
  }

  @media (max-width: 840px) {
    justify-self: center;
    width: 82%;
    height: 78%;
  }

  @media (max-width: 610px) {
    grid-area: 1/6/4/9;
    width: 75%;
    height: 75%;

  }

  @media (max-width: 420px) {
    grid-area: 1/5/4/10;
    margin-right: 2rem;
  }

  @media (max-width: 360px){
    width: 60%;
    height: 60%;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

 @media (max-width: 1400px){
   margin-top: 3rem;
 }

  @media (max-width: 420px) {
    font-size: 0.6rem;
  }

  h2 {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    text-transform: uppercase;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 2rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.9rem;
  text-align: center;
  padding: 0 7rem;
  margin: 2rem;

  @media (max-width: 1400px) {
    padding: 0 2rem;
    margin: 2.3rem;
    margin-bottom: 3rem;
  }


  @media (max-width: 840px) {
    margin: 1rem;
    font-size: 0.9rem;
    width: 90%;
    
  }

  @media (max-width: 420px) {
    font-size: 0.68rem;
    line-height: 0.9rem;
    padding: 0 1rem;
    margin: .5rem 0 .8rem 0;
    width: 95%;
    text-indent: 0;
  }

  @media (max-width: 360px){
    padding: 0 1rem;
    width: 100%;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  flex-wrap: wrap;

  @media (max-width: 1400px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  @media (max-width: 810px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    font-size: 0.5rem;
    margin-top: 0;
  }

  @media (max-width: 360px){
    margin-top: 0;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.inset};
  color: ${(props) => props.theme.orange};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  margin: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 810px) {
    font-size: 0.7rem;
  }

  @media (max-width: 420px) {
    font-size: 0.6rem;
    padding: .2rem 1rem;
    margin: .3rem;
  }
`;

// -----------Background Elements
export const FirstLineContainer = styled.div`
  grid-area: 11/1/13/2;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FirstLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`;

export const SecondLineContainer = styled.div`
  grid-area: 3/2/12/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SecondLine = styled.div`
  width: 150%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
`;

export const ThirdLineContainer = styled.div`
  grid-area: 3/11/8/12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;

  @media (max-width: 1500px) {
    grid-area: 3/12/8/13;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ThirdLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FourthAboutLineContainer = styled.div`
  grid-area: 7/12/8/14;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
    grid-area: 9/12/12/13;
    transform: rotate(90deg);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FourthLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};

  @media (max-width: 1500px) {
    width: 80%;
    transform: rotate(90deg);
  }
`;
