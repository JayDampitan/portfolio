import styled from 'styled-components';


export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 10rem;
  padding: 4rem;


  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 60vh;
    padding: 2rem 5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 18rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  border: 5px solid ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
    margin: 0 5rem;

  @media (max-width: 1000px) {
    height: 13rem;
    width: 13rem;
  }
`;

export const Image = styled.img`
  width: 97%;
  border-radius: 50%;
`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  width: 25vw;
  height: 20vh;
  border: 4px solid ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 1.4rem;
  border-radius: 1rem;

  @media (max-width: 1000px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
