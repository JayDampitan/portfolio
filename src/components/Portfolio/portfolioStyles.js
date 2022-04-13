import styled from "styled-components";
import { Link } from "react-router-dom";

// ------ Portfolio Cards

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  padding: 2rem;
  transform: translateX(-35px);

  h3 {
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily};
    border-bottom: 2px solid ${(props) => props.theme.orange};

    @media (max-width: 1400px) {
      font-size: 0.9rem;
    }

    @media (max-width: 810px) {
      font-size: 0.8rem;
    }
  }
`;

export const PortfolioContentContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: ${(props) =>
  props.firstCardActive ? props.theme.inset : props.theme.boxShadow};
  padding: 1rem;

  &p {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 0.9rem;
    padding: 0 2rem;
    text-indent: 2rem;

    @media (max-width: 1400px) {
      font-size: 0.8rem;
    }

    @media (max-width: 810px) {
      font-size: 0.7rem;
      padding: 0.4rem 0.9rem;
      margin: 0.2rem 0;
    }

    @media (max-width: 420px) {
      font-size: 0.6rem;
      padding: 0.3rem;
    }
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const FirstCardContainer = styled.div`
  grid-area: 3/2/10/4;

  @media (max-width: 1400px) {
    grid-area: 3/2/6/7;
    padding: 1rem;
  }

  @media (max-width: 420px) {
    grid-area: 1/2/3/13;
  }
`;

export const SecondCardContainer = styled.div`
  grid-area: 3/5/10/7;

  @media (max-width: 1400px) {
    grid-area: 7/2/10/7;
    padding: 1rem;
  }

  @media (max-width: 420px) {
    grid-area: 4/2/6/13;
  }
`;

export const ThirdCardContainer = styled.div`
  grid-area: 3/8/10/10;

  @media (max-width: 1400px) {
    grid-area: 3/8/6/13;
    padding: 1rem;
  }

  @media (max-width: 420px) {
    grid-area: 7/2/9/13;
  }
`;

export const FourthCardContainer = styled.div`
  grid-area: 3/11/10/13;

  @media (max-width: 1400px) {
    grid-area: 7/8/10/13;
    padding: 1rem;
  }

  @media (max-width: 420px) {
    grid-area: 10/2/12/13;
  }
`;

// ----------- Buttons

export const PortFolioVisit = styled.a`
  width: 10rem;
  height: 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.orange};
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }

  @media (max-width: 1400px) {
    width: 8rem;
    height: 2.5rem;
    justify-content: space-evenly;
  }

  @media (max-width: 810px) {
    width: 7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 420px) {
    width: 4rem;
  }
`;

// -----------Background Elements

export const FirstLineContainer = styled.div`
  grid-area: 7/1/8/2;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1400px) {
    align-items: flex-start;
  }

  @media (max-width: 810px) {
    display: none;
    width: 80%;
  }
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

  @media (max-width: 810px) {
    display: none;
  }
`;

export const ThirdLineContainer = styled.div`
  grid-area: 1/7/13/8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 810px) {
    display: none;
  }
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

  @media (max-width: 810px) {
    display: none;
  }
`;

export const FifthLineContainer = styled.div`
  grid-area: 1/12/3/14;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 810px) {
    display: none;
  }
`;
