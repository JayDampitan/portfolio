import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .5rem;
  border-radius: .5rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) =>
    props.insetActive ? props.theme.inset : props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  user-select: none;
  margin: .7rem;

  @media (max-width: 420px){
    margin: .4rem;
  }

  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) =>
    props.insetActive ? props.theme.orange : props.theme.text};

    @media (max-width: 420px){
      font-size: .8rem;
    }
`;


