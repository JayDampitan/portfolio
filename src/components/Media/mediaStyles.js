import styled from "styled-components";
import { Github } from "../AllSvgs";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 43%;

  @media (max-width: 1200px){
    left: 39%;
  }

  @media (max-width: 810px){
    left: 30%;
  }

  @media (max-width: 420px){
    left: 17%;
  }
`;

export const Icons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border};



  @media (max-width: 810px){
    width: 1.7rem;
    height: 1.7rem;
  }

  @media (max-width: 420px){
    width: 1.4rem;
    height: 1.4rem;
  }
`;

