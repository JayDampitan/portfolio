import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-left: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  
`;

export const Logo = styled.div`
  text-decoration: none;
  font-weight: 900;
  font-size: 4rem;
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  text-shadow: ${(props) => props.theme.logoShadow};
  background-color: ${(props) => props.theme.body};
  user-select: none;

  h2{
    color: ${props => props.theme.orange};
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 5rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  align-items: center;
  margin-left: 2rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  user-select: none;
`;

export const NavLinks = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const SwitchButton = styled.div`
  border: ${(props) => props.theme.border};
  padding: 0.7rem;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: .8rem;
`;

export const Hamburger = styled.div``;
