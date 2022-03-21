import styled from "styled-components";
import { Github } from "../AllSvgs";

export const Icons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 38%;
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    margin: 1.3rem 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  margin: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border};
`;
