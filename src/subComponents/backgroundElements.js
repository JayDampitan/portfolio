import styled from "styled-components";

export const Circle = styled.div`
  width: 3.7rem;
  height: 3.7rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.inset};
  border: ${(props) => props.theme.border};

  @media (max-width: 1680px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 1300px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 420px) {
    width: 2em;
    height: 2rem;
  }
`;

export const Square = styled.div`
  width: 3.7rem;
  height: 3.7rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20%;
  box-shadow: ${(props) => props.theme.inset};

  @media (max-width: 1680px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 1300px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 420px) {
    width: 2em;
    height: 2rem;
  }
`;
