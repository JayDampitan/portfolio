import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  height: 63vh;
`;

export const PortfolioTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  font-size: 2rem;
  border: 4px solid ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.boxShadow},
    ${(props) => props.theme.inset};
  padding: 1.2rem;
  border-radius: 1rem;
  user-select: none;
`;

export const PortfolioContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 5rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: 20%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.border};
  margin: 0 4rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    height: 13rem;
    width: 13rem;
    margin: 0 1rem;
  }
`;
