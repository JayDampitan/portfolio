import styled from "styled-components";
import { Github } from "../AllSvgs";

export const Icons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 43%;
`;

export const IconContainer = styled.div`
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
`;
