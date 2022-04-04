import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderIntro = styled.div`
  color: ${(props) => props.theme.text};
  grid-area: 4/3/5/5;
  font-family: ${(props) => props.theme.fontFamily};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1680px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1200px) {
    grid-area: 2/5/3/10;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 810px) {
    font-size: 1rem;
    align-items: flex-end;
  }

  @media (max-width: 420px) {
    grid-area: 1/4/2/11;
    font-size: 0.8rem;
  }
`;

export const HeaderName = styled.div`
  display: grid;
  grid-area: 5/3/6/7;
  align-items: center;
  justify-content: flex-start;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily};
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};
  border-bottom: 3px solid ${(props) => props.theme.text};
  word-spacing: 1rem;
  letter-spacing: 0.2rem;

  @media (max-width: 1680px) {
    font-size: 3rem;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    grid-area: 3/5/4/10;
    font-size: 2.6rem;
  }

  @media (max-width: 810px) {
    font-size: 2rem;
    justify-content: center;
  }

  @media (max-width: 420px) {
    grid-area: 2/1/3/14;
  }
`;

export const HeaderTitle = styled.div`
  grid-area: 6/3/7/7;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 1rem 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1680px) {
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    grid-area: 4/4/5/11;
    justify-content: center;
  }

  @media (max-width: 810px) {
    font-size: 0.7rem;
    justify-content: center;
  }

  @media (max-width: 420px) {
    font-size: 0.6rem;
    grid-area: 3/1/4/14;
  }
`;

export const ConnectButton = styled(Link)`
  justify-content: center;
  display: flex;
  grid-area: 7/3/8/4;
  align-items: center;
  border-radius: 4rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily};
  border: ${(props) => props.theme.border};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.orange};
    transition: ease-in-out 0.3s;
  }

  @media (max-width: 1680px) {
    font-size: 0.8rem;
  }

  @media (max-width: 1200px) {
    grid-area: 5/7/6/8;
    font-size: 0.7rem;
    width: 90%;
    height: 70%;
  }

  @media (max-width: 810px) {
    font-size: 0.4rem;
    border-radius: 20%;
  }

  @media (max-width: 420px) {
    grid-area: 4/6/5/9;
    border-radius: 1rem;
  }
`;

export const HeaderBox = styled.div`
  grid-area: 3/8/11/13;
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  border-radius: 2rem;
  border: 5px solid ${(props) => props.theme.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 1200px) {
    grid-area: 6/5/13/10;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 810px) {
    grid-area: 6/3/13/12;
    margin-left: 1.2rem;
  }

  @media (max-width: 420px) {
    grid-area: 5/2/11/13;
    margin-left: 1.2rem;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 5rem;
  padding-top: 0.6rem;

  @media (max-width: 1305px) {
    padding-left: 5rem;
    padding-top: 1rem;
    width: 90%;
    height: 90%;
  }

  @media (max-width: 810px) {
    padding-left: 3rem;
  }
`;

// Background Elements

export const FirstCircleContainer = styled.div`
  grid-area: 5/1/6/3;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 1rem;
  padding-right: 1rem;

  @media (max-width: 1200px) {
    grid-area: 3/1/4/5;
  }

  @media (max-width: 810px) {
    display: none;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const FirstLine = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  margin-bottom: -1rem;
`;

export const SquareContainer = styled.div`
  grid-area: 5/7/12/8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 1200px) {
    grid-area: 5/10/12/11;
  }

  @media (max-width: 810px) {
    display: none;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const SecondLine = styled.div`
  transform: rotate(90deg);
  height: 2px;
  width: 80%;
  background-color: ${(props) => props.theme.text};
  margin: 3rem;

  @media (max-width: 1200px) {
    margin: 7rem 0;
  }
`;

export const ThirdLineContainer = styled.div`
  grid-area: 11/7/13/11;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 2rem;

  @media (max-width: 1200px) {
    grid-area: 12/10/13/13;
  }

  @media (max-width: 810px) {
   display: none;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const ThirdLine = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 50%;
  height: 2px;
`;

export const FourthLineContainer = styled.div`
  grid-area: 11/11/13/14;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1200px) {
    grid-area: 6/3/9/5;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 810px) {
    display: none;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const FourthLine = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 50%;
  height: 2px;

  @media (max-width: 1200px) {
    transform: rotate(90deg);
  }

  @media (max-width: 810px) {
    width: 150%;
  }
`;
