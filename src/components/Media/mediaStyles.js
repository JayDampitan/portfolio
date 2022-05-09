import styled from "styled-components";

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }

  @media (max-width: 420px) {
    padding: 0 1rem;
  }
`;

export const LogoWrapper = styled.div`
  margin: 1.2rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.switchActive ? props.theme.inset : props.theme.boxShadow};
  border: ${(props) => props.theme.border};
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 0.5rem;
  }
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 2.3rem;
  font-family: ${(props) => props.theme.fontFamily}, sans-serif;
  background-color: ${(props) => props.theme.body};
  user-select: none;
  background: none;

  h2 {
    color: ${(props) => props.theme.orange };
    text-shadow: ${(props) => props.theme.logoShadow};
    @media (max-width: 600px) {
      font-size: 2.4rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  padding: 0.7rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border};

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }

  @media (max-width: 810px) {
    width: 1.7rem;
    height: 1.7rem;
    margin: 0 0.5rem;
  }

  @media (max-width: 420px) {
    width: 1.4rem;
    height: 1.4rem;
    padding: .5rem;
  }
`;
