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
`;

export const HeaderName = styled.div`
  display: grid;
  grid-area: 5/3/6/7;
  align-items: flex-start;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily};
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};
  border-bottom: 3px solid ${(props) => props.theme.text};
  word-spacing: 1rem;
  letter-spacing: 0.2rem;
`;

export const HeaderTitle = styled.div`
  grid-area: 6/3/7/7;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 0.3rem; ;
  margin: 1rem 0px;
`;

export const ConnectButton = styled(Link)`
  justify-content: center;
  display: flex;
  grid-area: 7/3/8/4;
  justify-content: center;
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
    transition: ease-in-out .3s;
  }
`;

export const HeaderBox = styled.div`
  grid-area: 3/8/11/13;
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  border-radius: 2rem;
  position: relative;
  border: 5px solid ${(props) => props.theme.orange};
`;

export const CircleContainer = styled.div`
  grid-area: 5/1/6/3;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

export const FirstLine = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  margin-bottom: -1rem;
`;

export const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.inset};
  /* border-radius: 0px 50% 50% 50% ; */
  border: ${(props) => props.theme.border};
  transform: translateY(1.3rem);
`;

export const SquareContainer = styled.div`
  grid-area: 5/7/12/8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Square = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20%;
  box-shadow: ${(props) => props.theme.inset};
`;

export const SecondLine = styled.div`
  transform: rotate(90deg);
  height: 2px;
  width: 80%;
  background-color: ${(props) => props.theme.text};
  margin: 3rem;
`;

export const ThirdLineContainer = styled.div`
  grid-area: 11/7/13/11;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThirdLine = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 50%;
  height: 2px;
`;

export const SecondCircleContainer = styled.div`
  grid-area: 11/10/13/12;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-right:8rem;
`;

// export const Trapezoid = styled.div`
//   clip-path: polygon(25% 15%, 73% 15%, 100% 100%, 0% 100%);
//   background-color: ${props => props.theme.body};
//   height: 50%;
//   width: 50%;
//   margin-left: 3rem;
//   border-radius: .5rem;
//   box-shadow: ${props => props.theme.triangleShadow};
//   border-radius: 1rem;
// `;
