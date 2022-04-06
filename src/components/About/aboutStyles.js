import styled from "styled-components";

export const ContentContainer = styled.div`
  grid-area: 3/4/11/11;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1200px){
    grid-area: 3/3/11/12;
  }
  @media (max-width: 810px){
    grid-area: 4/3/12/12;
  }
`;


export const ImageContainer = styled.div`
  width: 85%;
  height: 85%;
  grid-area: 2/3/7/5;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.orange};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 0.4rem;

  @media (max-width: 1200px){
    grid-area: 2/6/5/9;
  }

  @media (max-width: 420px){
    grid-area: 2/5/4/9;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;


`;

export const TitleContainer = styled.div`
  grid-area: 4/6/5/9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px){
    grid-area: 5/4/6/11;
  }

  @media (max-width: 810px){
    grid-area: 5/4/6/11;
    font-size: .8rem;
  }

  @media (max-width: 420px){
    grid-area: 4/4/5/11;
    font-size: .7rem;
    align-items: flex-end;
  }

  h2 {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    text-transform: uppercase;
  }
 
`;

export const ParagraphContainer = styled.div`
  grid-area: 5/5/8/10;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px){
    grid-area: 6/4/9/11;
  }

  @media (max-width: 810px){
    grid-area: 6/4/10/11;
  }
    @media (max-width: 420px){
    grid-area: 6/4/9/11;
  }

  p{

    @media (max-width: 700px){
    font-size: .9rem;
  }
    @media (max-width: 420px){
      font-size: .7rem;
    }
  }
  
`

export const SvgContainer = styled.div`
  grid-area: 8/5/9/10;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px){
    grid-area: 9/5/10/10;
  }

  @media (max-width: 810px){
    grid-area: 11/4/12/11;
  }

  @media (max-width: 420px){
    grid-area: 11/3/12/12;
  }
`;

export const SvgBox = styled.div`
  width: 2rem;
  height: 2rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.inset};
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px){
    width: 2rem;
  }

  @media (max-width: 810px){
    width: 1rem;
    height: 1rem;
  }
`;

// -----------Background Elements
export const FirstLineContainer = styled.div`
  grid-area: 11/1/13/2;
  display: flex;
  align-items: center;

  @media (max-width: 1200px){
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

  @media (max-width: 1200px){
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

  @media (max-width: 1500px){
    grid-area: 3/12/8/13;
  }

  @media (max-width: 1200px){
    display: none;
  }
`;

export const ThirdLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  transform: rotate(90deg);

  @media (max-width: 1200px){
    display: none;
  }
`;

export const FourthAboutLineContainer = styled.div`
  grid-area: 7/12/8/14;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px){
    grid-area: 9/12/12/13;
    transform: rotate(90deg);
  }

  @media (max-width: 1200px){
    display: none;
  }
`;

export const FourthLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: ${(props) => props.theme.text};

  @media (max-width: 1500px){
    width: 80%;
    transform: rotate(90deg);
  }

 
`;
