import styled from 'styled-components';


export const ContentContainer = styled.div`
  grid-area: 4/4/12/11;
  padding: 2rem 10rem;
  padding: 4rem;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 10rem;;

 h2{
   margin-bottom: 4rem;
   border-bottom: 3px solid ${props => props.theme.orange};
 }
`;

export const ImageContainer = styled.div`
  width: 15rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -7rem;
  left: -10rem;
  padding: 0.5rem;
  border: 5px solid ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const AboutMe = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  p{ 
    display: inline-block;
    }
`;

export const SvgContainer = styled.div`
  grid-area: 9/5/11/11;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 40%;
`;

export const SvgBox = styled.div`
  width: 3rem;
  height: 3rem;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 50%;
  padding: .5rem;
    
  display: flex;
  align-items: center;
  justify-content: center;
  `
