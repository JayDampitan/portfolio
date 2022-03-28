import styled from "styled-components";
import { Link } from "react-router-dom";

// ------ Portfolio Cards

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.text};

  h3 {
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily};
    border-bottom: 2px solid ${(props) => props.theme.orange};
  }

  p {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 0.9rem;
    padding: 0 2rem;
  }
`;

export const FirstCardContainer = styled.div`
  grid-area: 4/2/11/4;
`;

export const SecondCardContainer = styled.div`
  grid-area: 4/5/11/7;
`;

export const ThirdCardContainer = styled.div`
  grid-area: 4/8/11/10;
`;

export const FourthCardContainer = styled.div`
  grid-area: 4/11/11/13;
`;

// ------ Buttons

export const PortFolioVisit = styled(Link)`
  width: 10rem;
  height: 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 0.5rem;
  color: ${(props) => (props) => props.theme.orange};
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  :hover{
    box-shadow: ${props => props.theme.inset};
  }
`;
