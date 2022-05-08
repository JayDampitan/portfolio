import styled from "styled-components";
import { data } from "../../assets/data";

export const WorkPageContainer = styled.div`
  grid-area: 2/2/12/13;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: ${(props) => props.theme.inset};

  @media (max-width: 1100px) {
    flex-direction: column;
    grid-area: 2/2/13/13;
  }

  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
  width: 40%;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (max-width: 1100px) {
    width: 94%;
    height: 50%;
  }
`;

export const CarouselTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  border-radius: 0.5rem;

  h1 {
    color: ${(props) => props.theme.orange};
    font-size: 2.3rem;
    letter-spacing: 0.2rem;
    padding: 0.4rem 0.7rem;
    border-bottom: 2px solid ${(props) => props.theme.text};
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 90%;

  @media (max-width: 1100px) {
    width: 70%;
    height: 80%;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 1rem;
  padding: 0.7rem;
  height: 85%;
  width: 75%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 65%;
    height: 80%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: .5rem;
`;

export const CarouselButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.body};
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }

  @media (max-width: 1400px) {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

export const PortfolioGithub = styled.a`
  width: 2rem;
  fill: ${(props) => props.theme.text};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-left: 3rem;

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }

  @media (max-width: 1100px) {
    width: 1.5rem;
  }

  @media (max-width: 420px) {
    width: 0.8rem;
  }
`;

export const WorkDesContainer = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0 1.5rem;

  @media (max-width: 1100px) {
    flex-direction: row;
    width: 90%;
    height: 40%;
    padding: 0 1rem;
  }

  p {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 0.9rem;
  }
`;

export const WorkDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 2rem;
  line-height: 1.4rem;

  @media (max-width: 1100px) {
    line-height: 1rem;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.orange};
  padding: 1rem;

  @media (max-width: 1100px) {
    width: 50%;
    height: 80%;
    border-left: 1px solid ${(props) => props.theme.orange};
    border-top: none;
  }
`;

export const WorkColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 2rem;
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 0.5rem;
  height: 90%;
  width: 30%;
  padding: 0.5rem 0;

  @media (max-width: 1100px) {
    width: 20%;
    height: 80%;
  }
`;

export const WorkIconContainer = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  fill: ${(props) => props.theme.text};
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.inset};

  @media (max-width: 1400px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 0.9rem;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;
`;

export const ColorExample = styled.span`
  width: 1.4rem;
  height: 1.4rem;
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 50%;
  margin: 5px;
  background-color: ${(props) => props.colorTheme};
`;
