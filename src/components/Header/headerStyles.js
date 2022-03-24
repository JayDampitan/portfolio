import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderIntro = styled.div`
  color: ${(props) => props.theme.text};
  grid-area: 3/2/4/4;
  font-family: ${(props) => props.theme.fontFamily};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const HeaderName = styled.div`
  display: grid;
  grid-area: 4/2/5/5;
  align-items: flex-start;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily};
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};
  margin: 1rem 0;
  border-bottom: 2px solid ${(props) => props.theme.text};
  word-spacing: 1rem;
  letter-spacing: 0.2rem;
`;

export const HeaderTitle = styled.div`
  grid-area: 5/2/6/4;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 0.3rem; ;
`;

export const ConnectButton = styled(Link)`
  justify-content: center;
  display: flex;
  grid-area: 6/2/7/3;
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
  margin-top: 1rem;
  cursor: pointer;

  :hover {
    /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4 ); */
    /* background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199 ); */
    /* background-size: 400%; */
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.orange};
  }
`;

export const HeaderBox = styled.div`
  grid-area: 2/6/9/10;
  box-shadow: ${(props) => props.theme.boxShadow}, ${props => props.theme.inset};
  border-radius: 2rem;
  position: relative;
  border: 5px solid ${props => props.theme.orange};
`;

export const CircleContainer = styled.div`
  grid-area: 4/1/5/2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const FirstLine = styled.div`
  width: 4rem;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  grid-area: 4/1/5/2;
  top: 52.6%;
  margin-bottom: 1rem;
`;

export const FirstCircle = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.inset};
  /* border-radius: 0px 50% 50% 50% ; */
  border: ${(props) => props.theme.border};
  margin-left: 2rem;
  transform: translateY(1.3rem);
`;

export const SquareContainer = styled.div`
  grid-area: 4/5/10/6;
  display: flex;
  align-items: space-between;
  position: relative;
`;

export const Square = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20%;
  margin-top: 5rem;
  margin-left: 3rem;
  box-shadow: ${(props) => props.theme.inset};
`;

export const SecondLine = styled.div`
  position: absolute;
  transform: rotate(90deg);
  top: 17rem;
  left: -1.9rem;
  height: 2px;
  width: 14rem;
  background-color: ${(props) => props.theme.text};
`;

export const SecondSquareContainer = styled.div`
  grid-area: 10/5/11/6;
  display: flex;
`;
export const SecondSquare = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 20%;
  margin-left: 3rem;
  margin-bottom: 1rem;
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
