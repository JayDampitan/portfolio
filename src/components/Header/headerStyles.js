import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  height: 63vh;

  @media only screen and (max-width: 1000px) {
    height: 60vh;
    width: 100%;
  }

  @media only screen and (max-width: 966px) {
    height: 60vh;
    width: 100%;
  }
`;

export const FirstHeader = styled.div`
  font-size: 130px;
  font-family: "Alfa Slab One", sans-serif;
  border: ${(props) => props.theme.border};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    font-size: 100px;
  }
`;

export const SecondHeader = styled.div`
  font-size: 80px;
  font-family: "Roboto", sans-serif;
  border: 2px solid yellow;
  margin: 2rem;
  border: ${(props) => props.theme.border};
  border-radius: 0.8rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    font-size: 60px;
  }
`;

export const ThirdHeader = styled.div`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  border: 2px solid green;
  border: ${(props) => props.theme.border};
  border-radius: 0.8rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;
