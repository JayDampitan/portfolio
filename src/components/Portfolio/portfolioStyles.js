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
  padding: 2rem;
  transform: translateX(-35px);

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
  grid-area: 3/2/10/4;
`;

export const SecondCardContainer = styled.div`
  grid-area: 3/5/10/7;
`;

export const ThirdCardContainer = styled.div`
  grid-area: 3/8/10/10;
`;

export const FourthCardContainer = styled.div`
  grid-area: 3/11/10/13;
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

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }
`;

// -----------Background Elements

export const FirstLineContainer = styled.div`
  grid-area: 7/1/8/2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FirstPortfolioLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`;

export const SecondLineContainer = styled.div`
  grid-area: 11/2/13/7;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ThirdLineContainer = styled.div`
  grid-area: 1/7/13/8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const SecondPortfolioLine = styled.div`
  width: 180%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
  margin: 11.5rem 0;
`;

export const FourthLineContainer = styled.div`
  grid-area: 1/8/3/12;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FifthLineContainer = styled.div`
  grid-area: 1/12/3/14;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
