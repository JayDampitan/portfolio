import styled from "styled-components";
import { FourthLineContainer } from "../Header/headerStyles";

export const ContentContainer = styled.div`
  grid-area: 3/4/11/11;
  padding: 2rem 10rem;
  padding: 4rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 10rem;

  h2 {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    text-transform: uppercase;
  }
`;

export const ImageContainer = styled.div`
  width: 75%;
  height: 95%;
  grid-area: 2/3/6/5;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.orange};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 0.4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const SvgContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SvgBox = styled.div`
  width: 2rem;
  height: 2rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const FirstLineContainer = styled.div`
  grid-area: 11/1/13/2;
  display: flex;  
  align-items: center;

`

export const FirstLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`
export const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.inset};
  border: ${(props) => props.theme.border};
`;

export const Square = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20%;
  box-shadow: ${(props) => props.theme.inset};
`;

export const SecondLineContainer = styled.div`
  grid-area: 3/2/12/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SecondLine = styled.div`
  width: 150%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
`;

export const ThirdLineContainer = styled.div`
  grid-area: 3/11/8/12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
`

export const ThirdLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);
` 

export const FourthAboutLineContainer = styled.div`
  grid-area: 7/12/8/14;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FourthLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
` 