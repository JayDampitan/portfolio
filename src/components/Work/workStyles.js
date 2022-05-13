import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media (max-width: 360px) {
    grid-area: 1/2/12/13;
    box-shadow: none;
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
    width: 100%;
    height: 50%;
    box-shadow: none;
  }

  @media (max-width: 420px) {
    width: 100%;
    height: 40%;
    box-shadow: none;
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
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 810px) {
      font-size: 2rem;
    }

    @media (max-width: 420px) {
      font-size: 1.2rem;
    }

    @media (max-width: 390px) {
      font-size: 1.1rem;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80%;
  width: 95%;

  @media (max-width: 1100px) {
    width: 80%;
    height: 90%;
  }

  @media (max-width: 600px) {
    width: 90%;
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
  width: 70%;
  position: relative;
  overflow: hidden;
  transition: 1s ease-in;

  @media (max-width: 1400px) {
    width: 70%;
    height: 90%;
  }

  @media (max-width: 600px) {
    width: 60%;
    height: 80%;
  }
`;

export const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
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

  @media (max-width: 1400px) {
    width: 2.3rem;
    height: 2.3rem;
  }

  :hover {
    box-shadow: ${(props) => props.theme.inset};
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

  @media (max-width: 420px) {
    width: 1rem;
  }

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }
`;

export const WorkDesContainer = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;

  @media (max-width: 1100px) {
    flex-direction: row;
    width: 90%;
    height: 40%;
    padding: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: 40%;
  }
  p {
    @media (max-width: 360px) {
      width: 100%;
    }
  }
`;

export const WorkDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  line-height: 1.4rem;
  width: 100%;

  @media (max-width: 1100px) {
    line-height: 1rem;
    height: 100%;
    padding: 0.8rem;
  }

  @media (max-width: 810px) {
    font-size: 0.9rem;
  }

  @media (max-width: 420px) {
    font-size: 0.7rem;
    width: 80%;
  }

  @media (max-width: 360px) {
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  border-top: 1px solid ${(props) => props.theme.orange};
  padding: 1.5rem;

  @media (max-width: 1100px) {
    height: 50%;
    width: 45%;
    border-left: 1px solid ${(props) => props.theme.orange};
    border-top: none;
    flex-direction: column;
    justify-content: center;
    padding: 0 0.5rem;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

export const WorkColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 0.5rem;
  height: 100%;
  width: 25%;
  padding: 0.5rem;

  @media (max-width: 1100px) {
    width: 90%;
    height: 20%;
    margin: 0.5rem;
    justify-content: flex-start;
    box-shadow: none;
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

  @media (max-width: 1100px) {
    margin-right: 0 0.2rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;

export const ListContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0.2rem;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  li {
    margin: 0.3rem 0;

    @media (max-width: 1100px) {
      margin: 0.2rem;
    }
  }
`;

export const ColorList = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;

  @media (max-width: 1440px) {
  }

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

export const ColorExample = styled.span`
  width: 1.4rem;
  height: 1.4rem;
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 50%;
  margin: 5px;
  background-color: ${(props) => props.colorTheme};

  @media (max-width: 1440px) {
    margin: 0;
  }

  @media (max-width: 1100px) {
  }
`;
