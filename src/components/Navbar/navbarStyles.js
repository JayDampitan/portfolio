import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem 5rem;
  flex-wrap: wrap;
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
    color: ${props => props.theme.body}; 
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media (max-width: 960px){
    overflow: hidden;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: .7rem;
  align-items: center;
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.body};
  user-select: none;
  margin: 1rem;
`;

export const NavLinks = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  padding: .5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;



export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 30px;
    background: ${props => props.theme.text};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 900px){
    display: flex;
  }
`;
