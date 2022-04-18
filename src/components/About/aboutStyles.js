import styled from "styled-components";

export const ContentContainer = styled.div`
  grid-area: 3/4/11/11;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 13rem;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};

  @media (max-width: 1400px) {
    grid-area: 4/3/12/12;
    padding: 4rem 5rem;
  }
  @media (max-width: 810px) {
    grid-area: 4/3/12/12;
    padding: 3rem 3rem;
  }
  @media (max-width: 420px) {
    grid-area: 4/3/12/12;
    padding: 2rem 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 85%;
  height: 85%;
  grid-area: 2/3/7/5;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.orange};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 0.4rem;

  @media (max-width: 1400px) {
    grid-area: 2/6/5/9;
  }

  @media (max-width: 420px) {
    justify-self: center;
    align-self: center;
    grid-area: 3/5/5/9;
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 799px){
    font-size: .8rem
  }

  @media(max-width: 420px){
    font-size: .6rem;
  }

  h2 {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    text-transform: uppercase;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 6rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.9rem;

  @media (max-width: 420px){
    font-size: .6rem;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 420px){
    font-size: .7rem;
  }

  h4 {
    margin: 0.5rem;
    font-weight: 300;
  }

  p {
    font-size: 0.8rem;
    margin: 0.1rem;

    @media (max-width: 420px){
    font-size: .5rem;
  }
  }

  span {
    margin: 0.8rem;
  }
`;

// -----------Background Elements
export const FirstLineContainer = styled.div`
  grid-area: 11/1/13/2;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FirstLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`;

export const SecondLineContainer = styled.div`
  grid-area: 3/2/12/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: none;
  }
`;

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

  @media (max-width: 1500px) {
    grid-area: 3/12/8/13;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ThirdLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FourthAboutLineContainer = styled.div`
  grid-area: 7/12/8/14;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
    grid-area: 9/12/12/13;
    transform: rotate(90deg);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FourthLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};

  @media (max-width: 1500px) {
    width: 80%;
    transform: rotate(90deg);
  }
`;
