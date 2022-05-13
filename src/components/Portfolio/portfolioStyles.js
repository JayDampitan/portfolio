import styled from "styled-components";
import { Link } from "react-router-dom";

// ------ Portfolio Cards

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.text};
  transform: translateX(-35px);
  position: relative;
  padding: 2rem;

  @media (max-width: 1440px) {
    width: 100%;
    height: 93%;
  }

  @media (max-width: 450px) {
    flex-direction: row;
    padding: 1.8rem 1.5rem;
    justify-content: space-evenly;
    margin-left: 0.5rem;
  }

  @media (max-width: 360px) {
    width: 100%;
    height: 90%;
  }
`;

export const PortfolioTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    position: absolute;
    width: auto;
    top: 2rem;
    left: 57%;
    width: 8rem;
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    top: 1.8rem;
    left: 56%;
    width: 6.7rem;
  }

  h3 {
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily};
    border-bottom: 2px solid ${(props) => props.theme.orange};
    text-shadow: ${(props) => props.theme.boxShadow};

    @media (max-width: 1400px) {
      font-size: 0.9rem;
    }

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }

    @media (max-width: 360px) {
      font-size: 0.7rem;
    }
  }
`;

export const PortfolioGithub = styled.a`
  width: 1.6rem;
  fill: ${(props) => props.theme.text};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }

  @media (max-width: 450px) {
    width: 0.8rem;
  }
`;

export const PortfolioContentContainer = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.firstCardActive ? props.theme.inset : props.theme.boxShadow};
  padding: 0.5rem;

  @media (max-width: 810px) {
    margin: 20px 0;
  }

  @media (max-width: 450px) {
    border-radius: 0.5rem;
    padding: 0.4rem 0.3rem;
    height: 5.3rem;
    width: 18rem;
    margin-right: 1rem;
  }

  @media (max-width: 810px) {
    margin: 10px 0;
  }

  p {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 0.9rem;
    display: block;

    @media (max-width: 810px) {
      font-size: 0.7rem;
      padding: 0 0.5rem;
    }

    @media (max-width: 450px) {
      font-size: 0.5rem;
      margin: 0;
      padding: 0;
    }

    @media (max-width: 380px) {
      font-size: 0.4rem;
    }
  }
`;

export const PortfolioTech = styled.div`
  color: ${(props) => props.theme.text};
  letter-spacing: 0.1rem;
  font-family: ${(props) => props.theme.fontFamily};
  margin-top: 0.5rem;
  justify-content: flex-start;
  width: 100%;

  span {
    font-size: 0.6rem;
    margin: 0 0.2rem;

    @media (max-width: 810px) {
      display: none;
    }
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  @media (max-width: 450px) {
    border-radius: 0.3rem;
  }
`;

export const FirstCardContainer = styled.div`
  grid-area: 3/2/10/4;

  @media (max-width: 1400px) {
    grid-area: 1/2/6/7;
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 450px) {
    grid-area: 1/2/3/13;
    height: 80%;
    margin-top: 10px;
  }
`;

export const SecondCardContainer = styled.div`
  grid-area: 3/5/10/7;

  @media (max-width: 1400px) {
    grid-area: 7/2/12/7;
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 450px) {
    grid-area: 4/2/6/13;
    height: 80%;
    margin-top: 10px;
  }
`;

export const ThirdCardContainer = styled.div`
  grid-area: 3/8/10/10;

  @media (max-width: 1400px) {
    grid-area: 1/8/6/13;
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 450px) {
    grid-area: 7/2/9/13;
    height: 80%;
    margin-top: 10px;
  }
`;

export const FourthCardContainer = styled.div`
  grid-area: 3/11/10/13;

  @media (max-width: 1400px) {
    grid-area: 7/8/12/13;
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 450px) {
    grid-area: 10/2/12/13;
    height: 80%;
    margin-top: 10px;
  }
`;

// ----------- Buttons

export const PortfolioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 450px) {
    margin-top: 2.5rem;
    margin-left: 10px;
  }
`;

export const PortFolioVisit = styled.a`
  width: 6rem;
  height: 2.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.orange};
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 500;

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

  @media (max-width: 450px) {
    width: 3rem;
    margin-left: 10px;
    font-size: 10px;
    height: 25px;
    border-radius: 0;
  }
`;

export const MoreButton = styled(Link)`
  width: 6rem;
  height: 2.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  display: flex;
  text-align: center;
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
    justify-content: space-evenly;
  }

  @media (max-width: 810px) {
    width: 7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    width: 3rem;
    margin: 0.5rem;
    font-size: 10px;
    height: 25px;
    border-radius: 0;
  }
`;

// -----------Background Elements

export const FirstLineContainer = styled.div`
  grid-area: 7/1/8/2;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1400px) {
    display: none;
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
  align-self: center;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ThirdLineContainer = styled.div`
  grid-area: 1/7/13/8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 1440px) {
    margin-bottom: 8px;
  }

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const FifthLineContainer = styled.div`
  grid-area: 1/12/3/14;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1400px) {
    display: none;
  }
`;
