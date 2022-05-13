import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  margin-bottom: 10px;

  .home,
  .about,
  .portfolio,
  .contact {
    box-shadow: ${(props) => props.theme.inset};
    border: none;
    fill: ${props => props.theme.orange};
    border-radius: 0.5rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  user-select: none;
  margin: 0 1rem;

  @media (max-width: 1440px) {
    margin: 0 0.5rem;
  }


  :hover {
    box-shadow: ${(props) => props.theme.inset};
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  padding: 0.8rem;
  cursor: pointer;
  fill: ${(props) => props.theme.text};

  .icon-home,.icon-about,.icon-portfolio,.contact{
    fill: ${props => props.theme.orange};
  }

  @media (max-width: 1440px) {
    padding: 0.6rem;
  }
  @media (max-width: 450px) {
    padding: 0.5rem;
  }
`;
