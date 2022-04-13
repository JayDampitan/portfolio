import styled from "styled-components";

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border};



  @media (max-width: 810px){
    width: 1.7rem;
    height: 1.7rem;
  }

  @media (max-width: 420px){
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const SwitchButton = styled.div`
  border: ${(props) => props.theme.border};
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.logoShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: .7rem;
`;

