import styled from "styled-components";

export const BorderLine = styled.div`
  width: 100%;
  height: 0.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  user-select: none;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
